Clipcraft.Agency

A professional video editing services portfolio website showcasing creative video editing, motion graphics, and multimedia content creation services.

## 🚀 Deployment to Render

This project is configured for easy deployment to Render's Static Site service.

### Prerequisites

- A Render account (free tier available)
- Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Push your code to Git**

   ```bash
   git add .
   git commit -m "Initial commit for Render deployment"
   git push origin main
   ```

2. **Deploy to Render**

   - Go to [render.com](https://render.com) and sign in
   - Click "New +" and select "Static Site"
   - Connect your Git repository
   - Configure the deployment:
     - **Name**: `clipcraft-agency` (or your preferred name)
     - **Build Command**: Leave empty (not needed for static sites)
     - **Publish Directory**: `iPortfolio`
   - Click "Create Static Site"

3. **Automatic Deployment**
   - Render will automatically deploy your site
   - You'll get a URL like: `https://your-site-name.onrender.com`
   - Future pushes to your main branch will trigger automatic redeployments

### Manual Deployment (Alternative)

If you prefer to use the `render.yaml` file:

1. Ensure your repository contains the `render.yaml` file
2. In Render dashboard, select "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically detect and use the configuration

### Custom Domain (Optional)

1. In your Render dashboard, go to your static site
2. Click "Settings" → "Custom Domains"
3. Add your domain and follow the DNS configuration instructions

## 📁 Project Structure

```
portfolio/
├── iPortfolio/           # Main website files
│   ├── index.html       # Homepage
│   ├── about.html       # About page
│   ├── contact.html     # Contact page
│   ├── assets/          # CSS, JS, images, videos
│   └── projects/        # Project showcase pages
├── render.yaml          # Render deployment configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🛠️ Local Development

To run the site locally:

1. Navigate to the `iPortfolio` directory
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   cd iPortfolio
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📧 Contact Form

The contact form uses PHP. For production deployment:

- Consider using a form service like Formspree, Netlify Forms, or similar
- Or implement a serverless function for form handling

## 🔧 Configuration

- **Static Site**: No build process required
- **Publish Directory**: `iPortfolio` (contains all HTML, CSS, JS, and assets)
- **Custom Routes**: Configured to handle single-page application routing

## 📝 Notes

- All assets (images, videos, CSS, JS) are included in the `iPortfolio` directory
- The site uses Bootstrap, custom CSS, and various JavaScript libraries
- Video files are optimized for web delivery
- Responsive design works on all device sizes

# Clipcraft.Agency

# Clipcraft.Agency

# Clipcraft.Agency
