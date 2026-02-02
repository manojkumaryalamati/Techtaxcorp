// Script to push code to GitHub
import { Octokit } from '@octokit/rest';

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

async function main() {
  try {
    console.log('Connecting to GitHub...');
    const octokit = await getGitHubClient();
    
    // Get authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);
    
    const repoName = 'Techtaxcorp';
    const owner = user.login;
    
    // Check if repo exists, if not create it
    let repo;
    try {
      const { data: existingRepo } = await octokit.repos.get({ owner, repo: repoName });
      repo = existingRepo;
      console.log(`Repository ${owner}/${repoName} already exists`);
    } catch (e: any) {
      if (e.status === 404) {
        console.log(`Creating repository ${repoName}...`);
        const { data: newRepo } = await octokit.repos.createForAuthenticatedUser({
          name: repoName,
          description: 'TechTaxCorp - Professional Website Design & Accounting Services',
          private: false,
          auto_init: false
        });
        repo = newRepo;
        console.log(`Repository created: ${newRepo.html_url}`);
      } else {
        throw e;
      }
    }
    
    console.log(`\nRepository URL: ${repo.html_url}`);
    console.log(`Clone URL: ${repo.clone_url}`);
    console.log(`\nOwner: ${owner}`);
    console.log(`Repo: ${repoName}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
