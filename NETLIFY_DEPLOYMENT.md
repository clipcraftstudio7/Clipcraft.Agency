# Netlify Deployment Guide

## Quick Deploy (Recommended)

### Method 1: Drag & Drop (Fastest)
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag and drop the entire `iPortfolio` folder to the Netlify dashboard
3. Your site will be live in seconds!

### Method 2: Git Integration (Best for updates)
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository: `clipcraftstudio7/Clipcraft.Agency`
5. Set build settings:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `iPortfolio`
6. Click "Deploy site"

### Method 3: Netlify CLI (Advanced)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy your site
netlify deploy --dir=iPortfolio --prod
```

## Configuration
- The `netlify.toml` file is already configured for optimal performance
- Your site will be served from the `iPortfolio` directory
- All static assets (CSS, JS, images) are cached for 1 year
- Security headers are automatically applied

## Custom Domain (Optional)
1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Benefits of Netlify
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Form handling
- ✅ Analytics
- ✅ Custom domains
- ✅ Branch deployments

Your portfolio will be live at: `https://your-site-name.netlify.app`
