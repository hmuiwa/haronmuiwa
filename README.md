# Professional Portfolio Website

A stunning, modern portfolio website for a graphic designer based in Kenya. Features bold, elegant design with deep gold (#D4AF37), royal blue (#1E3A8A), black, and white color scheme.

## 🎨 Design Features

- **Bold & Elegant Color Palette**: Deep gold, royal blue, black, and white
- **Modern & Minimal Design**: Clean, high-end aesthetic
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Subtle transitions and scroll effects
- **Interactive Elements**: Portfolio filters, testimonial slider, contact form

## 📋 Sections Included

1. **Hero Section**: Name, title, tagline, and CTA buttons
2. **About Section**: Personal story, design philosophy, and statistics
3. **Portfolio**: Filterable grid showcasing your best work
4. **Services**: Comprehensive list of design services offered
5. **Testimonials**: Client feedback slider
6. **Contact**: Contact form, social media links, and contact information
7. **Footer**: Quick links, newsletter signup, and branding

## 🚀 How to Use

### Customization Steps:

1. **Update Personal Information**:
   - Replace "Your Name" with your actual name in `index.html`
   - Update the logo initials "YN" to your initials
   - Add your email, phone number, and location in the contact section

2. **Add Your Images**:
   - Replace `.image-placeholder` divs with actual images
   - Hero image: Add your professional photo
   - About image: Add another professional photo
   - Portfolio images: Add your project screenshots/mockups

3. **Update Portfolio Projects**:
   - Edit portfolio items with your actual projects
   - Add real project descriptions and links
   - Update categories as needed

4. **Customize Services**:
   - Modify service descriptions to match your offerings
   - Adjust pricing or features as needed

5. **Add Real Testimonials**:
   - Replace sample testimonials with real client feedback
   - Update client names and companies

6. **Social Media Links**:
   - Update social media URLs in the contact and footer sections
   - Add your Instagram, Behance, Dribbble, LinkedIn, Twitter links

## 🌐 Domain Name Suggestions

Based on the theme of elegance and leadership, here are domain suggestions:

### Premium Options:
- `yourname.design` - Professional and direct
- `yourname.studio` - Creative and modern
- `yournamecreative.com` - Comprehensive branding

### Kenya-Focused Options:
- `yourname.co.ke` - Kenya-specific domain
- `designbyyourname.com` - Personal branding
- `yournamedesigns.co.ke` - Local presence

### Creative Options:
- `goldenvisions.design` - Reflects the gold theme
- `leadingdesigns.studio` - Aligns with "Designing Visuals that Lead"
- `visualleader.design` - Professional and memorable

**Recommendation**: Use `.design` or `.studio` TLDs for a modern, creative feel, or `.co.ke` for strong Kenyan presence.

## 💻 Hosting Options for Kenya

### 1. **Netlify** (RECOMMENDED - FREE)
**Best for**: Static websites, easy deployment
**Cost**: FREE for personal projects
**Features**:
- Free SSL certificate
- Custom domain support
- Automatic deployments
- Global CDN
- 100GB bandwidth/month (free tier)

**How to Deploy**:
1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop your website folder
3. Connect custom domain
4. Done! Your site is live

**Kenya Access**: Works perfectly in Kenya, fast loading times

---

### 2. **Vercel** (FREE)
**Best for**: Modern web projects
**Cost**: FREE for personal use
**Features**:
- Free SSL
- Custom domains
- Automatic deployments
- Global CDN
- Unlimited bandwidth

**How to Deploy**:
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click
4. Add custom domain

---

### 3. **GitHub Pages** (FREE)
**Best for**: Simple hosting with version control
**Cost**: FREE
**Features**:
- Free hosting
- Custom domain support
- Version control with Git

**How to Deploy**:
1. Create GitHub account
2. Create repository named `yourusername.github.io`
3. Upload your files
4. Enable GitHub Pages in settings
5. Access at `yourusername.github.io`

---

### 4. **Truehost Kenya** (LOCAL - PAID)
**Best for**: Local support, domain + hosting bundle
**Cost**: From KES 3,000/year (~$23/year)
**Features**:
- Local Kenyan support
- .co.ke domain registration
- Email hosting included
- cPanel access

**Website**: [truehost.co.ke](https://truehost.co.ke)

---

### 5. **Safaricom Cloud** (LOCAL - PAID)
**Best for**: Kenyan businesses, local infrastructure
**Cost**: From KES 2,500/year
**Features**:
- Hosted in Kenya
- Local support
- Fast loading for Kenyan visitors
- Email hosting

**Website**: [cloud.safaricom.co.ke](https://cloud.safaricom.co.ke)

---

## 📱 Recommended Hosting Setup (FREE)

**For a professional portfolio with zero cost:**

1. **Hosting**: Use **Netlify** (free, fast, reliable)
2. **Domain**: 
   - Option A: Use free Netlify subdomain: `yourname.netlify.app`
   - Option B: Buy domain from Namecheap (~$10/year) and connect to Netlify
3. **Email**: Use Gmail with custom domain (free via Google Workspace trial or paid ~$6/month)

### Step-by-Step Deployment on Netlify:

1. **Prepare Your Files**:
   - Ensure all files are in one folder
   - Files needed: `index.html`, `styles.css`, `script.js`

2. **Sign Up for Netlify**:
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up with GitHub, GitLab, or email

3. **Deploy**:
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your website folder
   - Wait 30 seconds - your site is live!

4. **Custom Domain** (Optional):
   - Buy domain from Namecheap, GoDaddy, or Truehost
   - In Netlify: Site settings → Domain management → Add custom domain
   - Update DNS records as instructed
   - SSL certificate auto-generated (free)

5. **Done!** Your site is live with HTTPS

---

## 🎨 Color Palette Reference

```css
Primary Gold: #D4AF37
Gold Dark: #B8941F
Gold Light: #E8D090
Royal Blue: #1E3A8A
Royal Blue Dark: #1E40AF
Royal Blue Light: #3B82F6
Black: #0A0A0A
White: #FFFFFF
```

## 📝 Typography

- **Headings**: Playfair Display (Google Fonts)
- **Body**: Inter (Google Fonts)

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📧 Contact Form Setup

The contact form currently logs data to console. To make it functional:

### Option 1: Formspree (FREE)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in HTML:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms (FREE)
1. Add `netlify` attribute to form:
```html
<form name="contact" netlify>
```
2. Deploy to Netlify
3. Forms automatically work!

### Option 3: EmailJS (FREE)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add EmailJS SDK
3. Configure email template
4. Update JavaScript to send emails

---

## 🌍 Domain Registration in Kenya

### Recommended Registrars:

1. **Kenya Network Information Centre (KENIC)**
   - Official .co.ke registrar
   - Website: [kenic.or.ke](https://www.kenic.or.ke)
   - Cost: ~KES 1,000/year for .co.ke

2. **Truehost Kenya**
   - Easy registration
   - Website: [truehost.co.ke](https://truehost.co.ke)
   - Cost: KES 1,200/year for .co.ke

3. **Namecheap** (International)
   - Cheap .com domains
   - Website: [namecheap.com](https://www.namecheap.com)
   - Cost: ~$10/year for .com
   - Accepts M-Pesa via Flutterwave

---

## 📊 Performance Tips

1. **Optimize Images**:
   - Use WebP format for better compression
   - Compress images with TinyPNG
   - Recommended size: Under 200KB per image

2. **Lazy Loading**:
   - Add `loading="lazy"` to images
   - Improves initial page load

3. **Minify Code**:
   - Use online tools to minify CSS and JS
   - Reduces file size

---

## 🎯 SEO Optimization

1. **Update Meta Tags**:
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="graphic design, Kenya, branding, UI/UX">
<meta property="og:title" content="Your Name - Graphic Designer">
<meta property="og:image" content="your-image-url.jpg">
```

2. **Add Google Analytics**:
   - Sign up at [analytics.google.com](https://analytics.google.com)
   - Add tracking code to `<head>`

3. **Submit to Google**:
   - Use Google Search Console
   - Submit sitemap

---

## 💡 Next Steps

1. ✅ Customize all content with your information
2. ✅ Add your actual images and portfolio projects
3. ✅ Test on multiple devices
4. ✅ Choose and register domain name
5. ✅ Deploy to Netlify or Vercel
6. ✅ Set up contact form with Formspree/Netlify Forms
7. ✅ Add Google Analytics
8. ✅ Share on social media!

---

## 📞 Support

For questions about:
- **Hosting**: Contact Netlify support or Truehost Kenya
- **Domains**: Contact your registrar
- **Website Issues**: Review code or hire a developer

---

## 📄 License

This website template is free to use for personal and commercial projects.

---

**Built with ❤️ in Kenya**

*Designing Visuals that Lead*
