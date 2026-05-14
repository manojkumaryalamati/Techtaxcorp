// Script to push all code to GitHub using the GitHub API
import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

// Directories and files to ignore
const IGNORE_PATTERNS = [
  'node_modules',
  '.git',
  '.cache',
  '.config',
  '.upm',
  'dist',
  '.replit',
  'replit.nix',
  '.breakpoints',
  'generated-icon.png',
  '.local'
];

function shouldIgnore(filePath: string): boolean {
  return IGNORE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    
    if (shouldIgnore(fullPath)) {
      return;
    }

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function isBinaryFile(filePath: string): boolean {
  const binaryExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.pdf', '.zip', '.tar', '.gz'];
  return binaryExtensions.some(ext => filePath.toLowerCase().endsWith(ext));
}

async function main() {
  try {
    console.log('Connecting to GitHub...');
    const octokit = await getGitHubClient();
    
    // Get authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);
    
    const repoName = 'Techtaxcorp';
    const owner = user.login;
    const branch = 'main';
    
    // Check if repo exists
    let repoExists = false;
    try {
      await octokit.repos.get({ owner, repo: repoName });
      repoExists = true;
      console.log(`Repository ${owner}/${repoName} exists`);
    } catch (e) {
      console.log(`Repository does not exist, creating...`);
    }
    
    // Create repo if it doesn't exist
    if (!repoExists) {
      await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        description: 'TechTaxCorp - Professional Website Design & Accounting Services',
        private: false,
        auto_init: false
      });
      console.log('Repository created');
    }
    
    // Check if repository has commits (try to get main branch)
    let hasCommits = false;
    try {
      await octokit.git.getRef({ owner, repo: repoName, ref: `heads/${branch}` });
      hasCommits = true;
    } catch (e) {
      console.log('Repository is empty, initializing with README...');
    }
    
    // If no commits, create initial file using Contents API (this works for empty repos)
    if (!hasCommits) {
      console.log('Creating initial README to initialize repository...');
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo: repoName,
        path: 'README.md',
        message: 'Initial commit: Add README',
        content: Buffer.from('# TechTaxCorp\n\nProfessional Website Design & Accounting Services\n').toString('base64'),
        branch: branch
      });
      console.log('Repository initialized');
      
      // Wait for the commit to be processed
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Now get the latest commit
    const { data: ref } = await octokit.git.getRef({
      owner,
      repo: repoName,
      ref: `heads/${branch}`
    });
    const latestCommitSha = ref.object.sha;
    
    const { data: latestCommit } = await octokit.git.getCommit({
      owner,
      repo: repoName,
      commit_sha: latestCommitSha
    });
    const baseTreeSha = latestCommit.tree.sha;
    
    console.log(`Latest commit: ${latestCommitSha.substring(0, 7)}`);
    
    // Get all files in the project
    console.log('\nCollecting project files...');
    const projectRoot = process.cwd();
    const allFiles = getAllFiles(projectRoot);
    console.log(`Found ${allFiles.length} files to upload`);
    
    // Create tree entries for all files
    const treeEntries: { path: string; mode: '100644'; type: 'blob'; sha: string }[] = [];
    
    console.log('\nUploading files to GitHub...');
    let uploadedCount = 0;
    
    for (const filePath of allFiles) {
      const relativePath = path.relative(projectRoot, filePath);
      
      try {
        let content: string;
        let encoding: 'utf-8' | 'base64' = 'utf-8';
        
        if (isBinaryFile(filePath)) {
          content = fs.readFileSync(filePath).toString('base64');
          encoding = 'base64';
        } else {
          content = fs.readFileSync(filePath, 'utf-8');
        }
        
        // Create blob for file
        const { data: blob } = await octokit.git.createBlob({
          owner,
          repo: repoName,
          content,
          encoding
        });
        
        treeEntries.push({
          path: relativePath,
          mode: '100644',
          type: 'blob',
          sha: blob.sha
        });
        
        uploadedCount++;
        if (uploadedCount % 10 === 0) {
          console.log(`  Uploaded ${uploadedCount}/${allFiles.length} files...`);
        }
      } catch (err: any) {
        console.error(`  Error uploading ${relativePath}:`, err.message);
      }
    }
    
    console.log(`\nUploaded ${uploadedCount} files`);
    
    if (treeEntries.length === 0) {
      console.error('No files were uploaded!');
      process.exit(1);
    }
    
    // Create tree with base tree
    console.log('Creating commit tree...');
    const { data: tree } = await octokit.git.createTree({
      owner,
      repo: repoName,
      tree: treeEntries,
      base_tree: baseTreeSha
    });
    
    // Create commit with parent
    console.log('Creating commit...');
    const { data: commit } = await octokit.git.createCommit({
      owner,
      repo: repoName,
      message: 'TechTaxCorp professional website\n\nFeatures:\n- Professional website design and accounting services\n- Contact form with EmailJS integration\n- SEO optimized pages\n- Responsive design\n- PostgreSQL database for contact submissions',
      tree: tree.sha,
      parents: [latestCommitSha]
    });
    
    // Update branch reference
    console.log('Updating branch...');
    await octokit.git.updateRef({
      owner,
      repo: repoName,
      ref: `heads/${branch}`,
      sha: commit.sha
    });
    
    console.log('\n✅ Successfully pushed all files to GitHub!');
    console.log(`\nRepository URL: https://github.com/${owner}/${repoName}`);
    
  } catch (error: any) {
    console.error('Error:', error.message);
    if (error.response?.data) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

main();
