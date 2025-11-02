# Quick Start - Deploy to Vercel in 5 Minutes! ⚡

## Before You Deploy

1. **Get Formspree Form ID**:
   - Go to [formspree.io](https://formspree.io/) and sign up (free)
   - Create a new form
   - Copy your form ID (the part after `/f/` in the URL)
   - Example: If URL is `https://formspree.io/f/xyzabc123`, your ID is `xyzabc123`

2. **Update Form Action**:
   - Open `index.html` and find line 473
   - Replace `YOUR_FORM_ID` with your actual Formspree ID
   - Open `contact.html` and find line 80
   - Replace `YOUR_FORM_ID` with your actual Formspree ID

## Deploy Now! 🚀

### Easiest Way - Vercel CLI

1. **Install Vercel CLI** (one-time setup):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd "c:\Users\HP\Desktop\001 Web Dev\hmuiwa"
   vercel
   ```

3. **Follow prompts**:
   - Login when asked (creates account if needed)
   - Accept default settings
   - Done! Your site is live! 🎉

### With Git (For Future Updates)

```bash
# Navigate to your project
cd "c:\Users\HP\Desktop\001 Web Dev\hmuiwa"

# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Create a repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# Then connect to Vercel via their dashboard
```

## That's It!

Your portfolio is now live with:
- ✅ Free hosting on Vercel
- ✅ Working contact form via Formspree
- ✅ Free SSL certificate
- ✅ Custom domain support (optional)
- ✅ Automatic deployments from Git

## Next Steps

1. **Test your contact form** - Send yourself a test message
2. **Customize domain** - Change from `your-project.vercel.app` to your own
3. **Share your portfolio** - Send the link to potential clients!

---

Need detailed instructions? Check `DEPLOYMENT-GUIDE.md`
