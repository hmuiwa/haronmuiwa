# Deployment Guide - Vercel + Formspree

This guide will help you deploy your portfolio to Vercel with a working contact form using Formspree.

## Step 1: Setup Formspree (Contact Form)

1. **Go to Formspree**: Visit [https://formspree.io/](https://formspree.io/)
2. **Sign up for free**: Create a free account (allows 50 submissions/month)
3. **Create a new form**:
   - Click "New Form"
   - Give it a name like "Portfolio Contact Form"
   - Copy your form endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)
4. **Update your HTML files**:
   - Open `index.html` and `contact.html`
   - Find `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Example: `action="https://formspree.io/f/xyzabc123"`

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Easiest)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy your site**:
   ```bash
   cd "c:\Users\HP\Desktop\001 Web Dev\hmuiwa"
   vercel
   ```

3. **Follow the prompts**:
   - Login/signup when prompted
   - Confirm project settings
   - Your site will be live in seconds!

### Option B: Deploy via Git (Recommended for updates)

1. **Create a GitHub account** (if you don't have one): [https://github.com/](https://github.com/)

2. **Install Git** (if not installed):
   - Download from [https://git-scm.com/](https://git-scm.com/)
   - Install with default settings

3. **Initialize Git in your project**:
   ```bash
   cd "c:\Users\HP\Desktop\001 Web Dev\hmuiwa"
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Create a new repository on GitHub**:
   - Go to [https://github.com/new](https://github.com/new)
   - Name it `portfolio` or `hmuiwa-portfolio`
   - Make it public
   - Don't initialize with README (you already have files)
   - Click "Create repository"

5. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

6. **Connect to Vercel**:
   - Go to [https://vercel.com/](https://vercel.com/)
   - Sign up/login (can use GitHub account)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings:
     - Framework Preset: Other
     - Build Command: (leave empty)
     - Output Directory: (leave empty)
   - Click "Deploy"

7. **Your site is live!** 🎉
   - You'll get a URL like `your-project.vercel.app`
   - You can change this in Project Settings → Domains

## Step 3: Custom Domain (Optional)

If you have a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the instructions to update your DNS settings

## Step 4: Test Your Contact Form

1. Visit your live site
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (hmuiwa33@gmail.com) - you should receive the message
5. Check Formspree dashboard to see submissions

## Files Modified for Deployment

✅ `script.js` - Updated to work with Formspree
✅ `index.html` - Added Formspree action URL
✅ `contact.html` - Added Formspree action URL
✅ `vercel.json` - Vercel configuration file
✅ `.gitignore` - Git ignore file
❌ `send-email.php` - No longer needed (can be deleted)
❌ `netlify.toml` - Not needed for Vercel (can be deleted)

## Troubleshooting

### Contact form not working?
- Make sure you replaced `YOUR_FORM_ID` with your actual Formspree form ID
- Check browser console for errors (F12)
- Verify the form action URL is correct

### Site not updating?
- If using Git deployment, push your changes:
  ```bash
  git add .
  git commit -m "Update content"
  git push
  ```
- Vercel will automatically rebuild and deploy
- Or redeploy manually: `vercel --prod`

### Images not showing?
- Make sure all image paths are relative (e.g., `images/photo.png`)
- Check that the `images` folder is included in your deployment

## Need Help?

- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Formspree Docs**: [https://help.formspree.io/](https://help.formspree.io/)
- **Vercel Support**: Available in your Vercel dashboard

---

## Quick Commands Reference

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Check status
git status
```

Good luck with your deployment! 🚀
