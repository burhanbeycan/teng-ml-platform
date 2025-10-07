# GitHub Pages Deployment Guide

## Quick Start (5 Minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click **"New repository"** (green button)
3. Repository name: `teng-ml-platform` (or any name you prefer)
4. Description: "TENG Machine Learning Platform - Predict TENG Performance"
5. Set to **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README (we already have one)
7. Click **"Create repository"**

### Step 2: Upload Files

**Option A: Web Interface (Easiest)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `DEPLOYMENT_GUIDE.md` (this file)
3. Commit message: "Initial commit - TENG ML Platform"
4. Click **"Commit changes"**

**Option B: Command Line (If you have Git installed)**

```bash
cd /path/to/teng_ml_github

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - TENG ML Platform"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/teng-ml-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be available at:
```
https://yourusername.github.io/teng-ml-platform/
```

Replace `yourusername` with your actual GitHub username.

---

## Detailed Instructions

### Customizing the Website

#### Update Repository Name in README

1. Open `README.md`
2. Find all instances of `yourusername` and replace with your GitHub username
3. Find `teng-ml-platform` and replace if you used a different repository name
4. Commit changes

#### Update Contact Information

1. Open `README.md`
2. Scroll to **"Contact"** section
3. Add your email address
4. Commit changes

### Testing Locally Before Deployment

```bash
# Navigate to folder
cd teng_ml_github

# Start local server
python3 -m http.server 8080

# Open browser to http://localhost:8080
```

Test all features:
- ✅ Performance Predictor works
- ✅ Load CAMX Data button works
- ✅ Material Database displays correctly
- ✅ All tabs switch properly

### Troubleshooting

#### Website not loading

1. Check GitHub Pages settings (Settings → Pages)
2. Ensure branch is set to `main` and folder to `/ (root)`
3. Wait 2-3 minutes after first deployment
4. Check for typos in URL

#### Predictions not working

1. Open browser console (F12)
2. Check for JavaScript errors
3. Ensure `script.js` was uploaded correctly
4. Clear browser cache and reload

#### Styling issues

1. Ensure `style.css` was uploaded
2. Check file names are exactly: `index.html`, `style.css`, `script.js`
3. File names are case-sensitive on GitHub Pages

### Custom Domain (Optional)

If you want to use your own domain (e.g., `teng-ml.yourdomain.com`):

1. Buy a domain from any registrar
2. Add a `CNAME` file to repository with your domain:
   ```
   teng-ml.yourdomain.com
   ```
3. In repository Settings → Pages, add custom domain
4. Configure DNS at your registrar:
   ```
   Type: CNAME
   Name: teng-ml (or @)
   Value: yourusername.github.io
   ```

### Updating the Website

Whenever you make changes:

**Via Web Interface:**
1. Navigate to file on GitHub
2. Click pencil icon (Edit)
3. Make changes
4. Commit changes
5. Wait 1-2 minutes for redeployment

**Via Command Line:**
```bash
# Make changes to files locally
# Then:
git add .
git commit -m "Description of changes"
git push origin main
```

---

## Advanced: Expanding the Platform

### Adding More Materials to Database

1. Open `script.js`
2. Find `materialsDB` array
3. Add new entries:
```javascript
{
  id: 'NEW_001',
  name: 'Your Material',
  filler: 'Nanofiller',
  loading: 5,
  voc: 250,
  isc: 10,
  power: 1.0,
  ref: 'Your Reference 2025'
}
```
4. Save and commit

### Modifying Prediction Algorithm

1. Open `script.js`
2. Find `predict()` function
3. Modify base values or multipliers
4. Test locally before deploying

### Adding New Tabs

1. Open `index.html`
2. Add new tab button in `.tabs` section
3. Add new tab content div with class `tab-content`
4. Update `showTab()` function in `script.js` if needed

---

## Performance Optimization

### For Faster Loading

1. Minify CSS and JavaScript (use online tools)
2. Optimize images if you add any
3. Enable browser caching

### For Better SEO

1. Add meta tags to `<head>` in `index.html`:
```html
<meta name="description" content="TENG ML Platform - Predict Triboelectric Nanogenerator Performance">
<meta name="keywords" content="TENG, triboelectric, nanogenerator, machine learning, prediction">
<meta name="author" content="Burhan Beycan, Emrah Unalan">
```

2. Add Open Graph tags for social media:
```html
<meta property="og:title" content="TENG Machine Learning Platform">
<meta property="og:description" content="Predict TENG Performance Without Experiments">
<meta property="og:image" content="URL_to_preview_image">
<meta property="og:url" content="https://yourusername.github.io/teng-ml-platform/">
```

---

## Security & Privacy

- ✅ No backend server required
- ✅ All calculations done in browser
- ✅ No user data collected
- ✅ No cookies or tracking
- ✅ Static HTML/CSS/JavaScript only

---

## Support

If you encounter issues:

1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Search [GitHub Community](https://github.community/)
3. Contact: Burhan Beycan (your.email@metu.edu.tr)

---

## License

MIT License - Free to use, modify, and distribute with attribution.

---

**Your website will be live at:**
```
https://yourusername.github.io/teng-ml-platform/
```

**Enjoy your TENG ML Platform! 🚀**
