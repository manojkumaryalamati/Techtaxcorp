# Deploy TechTaxCorp to Firebase Hosting

## One-Time Setup (on your computer)

1. Install Node.js if not already installed: https://nodejs.org
2. Install Firebase CLI:
   ```
   npm install -g firebase-tools
   ```
3. Log in to Firebase:
   ```
   firebase login
   ```

## Deploy Steps

1. Clone the repository:
   ```
   git clone https://github.com/manojkumaryalamati/Techtaxcorp.git
   cd Techtaxcorp
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the site for Firebase:
   ```
   npx tsx scripts/build-firebase.ts
   ```

4. Deploy to Firebase:
   ```
   firebase deploy --only hosting
   ```

Your site will be live at: https://techtaxcorp-b36a1.web.app

## Connect Custom Domain (techtaxcorp.com)

1. Go to Firebase Console: https://console.firebase.google.com/project/techtaxcorp-b36a1/hosting
2. Click "Add custom domain"
3. Enter: techtaxcorp.com
4. Follow the DNS verification steps
5. Update your Hostinger DNS records as instructed by Firebase

## Re-deploying After Changes

After making changes, just run:
```
npx tsx scripts/build-firebase.ts
firebase deploy --only hosting
```
