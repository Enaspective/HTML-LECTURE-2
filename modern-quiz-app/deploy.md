# Deployment Guide for Modern Quiz App

## 🚀 Quick Deployment to GitHub Pages

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `modern-quiz-app`
5. Make it public
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Initialize Git and Push to GitHub

Open your terminal/command prompt and run these commands:

```bash
# Navigate to the modern-quiz-app directory
cd modern-quiz-app

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Modern Quiz App"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/modern-quiz-app.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Select "/ (root)" folder
7. Click "Save"

### Step 4: Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-2 minutes
- You'll see a green checkmark when deployment is complete

### Step 5: Access Your Live Site

Your quiz app will be available at:
```
https://YOUR_USERNAME.github.io/modern-quiz-app/
```

## 🔧 Alternative Deployment Methods

### Using Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "New site from Git"
4. Choose your `modern-quiz-app` repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty)
6. Click "Deploy site"

### Using Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your `modern-quiz-app` repository
5. Deploy settings:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"

## 🛠️ Local Development

### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

### Option 2: Using Python Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

### Option 3: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Or use npx
npx http-server
```

### Option 4: Using PHP
```bash
php -S localhost:8000
```

## 📝 Custom Domain (Optional)

If you want to use a custom domain:

1. **For GitHub Pages:**
   - Go to repository Settings > Pages
   - Add your custom domain
   - Update DNS settings with your domain provider

2. **For Netlify/Vercel:**
   - Go to your site settings
   - Add custom domain
   - Update DNS settings

## 🔍 Troubleshooting

### Common Issues:

1. **Site not loading:**
   - Check if GitHub Pages is enabled
   - Wait a few minutes for deployment
   - Check the Actions tab for build errors

2. **Styling not working:**
   - Ensure all files are in the root directory
   - Check file paths in HTML
   - Clear browser cache

3. **JavaScript not working:**
   - Open browser developer tools
   - Check Console tab for errors
   - Ensure script.js is in the correct location

### File Structure Check:
```
modern-quiz-app/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

## 🎉 Success!

Once deployed, your quiz app will have:
- ✅ Responsive design
- ✅ Multiple categories
- ✅ Difficulty levels
- ✅ Timer functionality
- ✅ Score tracking
- ✅ Beautiful animations

Share your live URL with friends and family to test their knowledge! 🧠✨ 