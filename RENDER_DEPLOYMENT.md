# 🚀 Deploy to Render - Step by Step Guide

This guide will help you deploy your Flask portfolio to Render (free hosting).

## 📋 Prerequisites

- GitHub account
- Render account (sign up at https://render.com)
- Your code pushed to GitHub

---

## 🔧 Step 1: Prepare Your Repository

### 1.1 Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Prepare for Render deployment"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/pooja-dengale/portfolio.git

# Push to GitHub
git push -u origin main
```

**Important Files for Render:**
- ✅ `requirements.txt` - Python dependencies (includes gunicorn)
- ✅ `render.yaml` - Render configuration
- ✅ `Procfile` - Start command
- ✅ `runtime.txt` - Python version
- ✅ `app.py` - Updated for production
- ✅ `config.py` - Production settings

---

## 🌐 Step 2: Deploy on Render

### 2.1 Create New Web Service

1. Go to https://dashboard.render.com/
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account (if not connected)
4. Select your portfolio repository
5. Click **"Connect"**

### 2.2 Configure Service

Render will auto-detect settings from `render.yaml`, but verify:

**Basic Settings:**
- **Name:** `portfolio` (or your preferred name)
- **Region:** Choose closest to you
- **Branch:** `main`
- **Root Directory:** Leave empty
- **Runtime:** `Python 3`

**Build & Deploy:**
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `gunicorn app:app`

**Instance Type:**
- Select **"Free"** (or paid if you prefer)

### 2.3 Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these variables:

| Key | Value | Notes |
|-----|-------|-------|
| `FLASK_ENV` | `production` | Required |
| `SECRET_KEY` | (click Generate) | Auto-generated |
| `MAIL_USERNAME` | `your-email@gmail.com` | Optional |
| `MAIL_PASSWORD` | `your-app-password` | Optional |

**For Email (Optional):**
- Get Gmail App Password: https://myaccount.google.com/apppasswords
- Add `MAIL_USERNAME` and `MAIL_PASSWORD`
- Without these, contact form will log to console

### 2.4 Deploy

1. Click **"Create Web Service"**
2. Wait 2-5 minutes for deployment
3. Your site will be live at: `https://your-app-name.onrender.com`

---

## 🔍 Step 3: Verify Deployment

### Check Your Site

1. Open the URL provided by Render
2. Test all sections:
   - ✅ Navigation works
   - ✅ Animations load
   - ✅ Images display
   - ✅ Contact form submits
   - ✅ CV downloads

### Check Logs

If something doesn't work:
1. Go to Render Dashboard
2. Click on your service
3. Click **"Logs"** tab
4. Look for errors

---

## 🐛 Common Issues & Solutions

### Issue 1: Build Failed

**Error:** `Could not find a version that satisfies the requirement`

**Solution:**
```bash
# Update requirements.txt locally
pip freeze > requirements.txt
git add requirements.txt
git commit -m "Update requirements"
git push
```

### Issue 2: Application Error

**Error:** `Application failed to start`

**Solution:**
- Check logs in Render dashboard
- Verify `FLASK_ENV=production` is set
- Ensure `SECRET_KEY` is generated

### Issue 3: Static Files Not Loading

**Error:** CSS/JS not loading

**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors
- Verify file paths in `templates/index.html`

### Issue 4: Contact Form Not Working

**Error:** Form submission fails

**Solution:**
- Check if `MAIL_USERNAME` and `MAIL_PASSWORD` are set
- Verify Gmail App Password is correct
- Check Render logs for email errors
- Without email config, messages log to console (check logs)

### Issue 5: Images Not Showing

**Error:** Profile image or CV not found

**Solution:**
```bash
# Ensure images are in git
git add static/images/*
git commit -m "Add images"
git push
```

---

## 🔄 Update Your Site

After making changes:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push

# Render auto-deploys on push!
```

Render automatically redeploys when you push to GitHub.

---

## ⚙️ Advanced Configuration

### Custom Domain

1. Go to your service in Render
2. Click **"Settings"** → **"Custom Domain"**
3. Add your domain
4. Update DNS records as instructed

### Environment Variables

Update anytime in Render Dashboard:
1. Go to service → **"Environment"**
2. Edit or add variables
3. Click **"Save Changes"**
4. Service auto-restarts

### Scaling

Free tier limitations:
- Spins down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds
- 750 hours/month free

Upgrade to paid tier for:
- Always-on service
- Faster performance
- More resources

---

## 📊 Monitoring

### View Logs

```bash
# In Render Dashboard
Service → Logs → View real-time logs
```

### Metrics

```bash
# In Render Dashboard
Service → Metrics → View CPU, Memory, Requests
```

---

## 🔒 Security Checklist

Before going live:

- ✅ `FLASK_ENV=production` is set
- ✅ `SECRET_KEY` is generated (not default)
- ✅ `.env` file is in `.gitignore`
- ✅ No sensitive data in code
- ✅ Email credentials are environment variables
- ✅ HTTPS is enabled (automatic on Render)

---

## 📝 Post-Deployment

### Update Your Links

Update these in your portfolio:
- LinkedIn profile
- GitHub README
- Resume/CV
- Social media

### Test Everything

- ✅ All pages load
- ✅ Forms work
- ✅ Downloads work
- ✅ Mobile responsive
- ✅ Fast loading

### Share Your Portfolio

Your live URL: `https://your-app-name.onrender.com`

---

## 💡 Tips

1. **Free Tier:** Service sleeps after 15 min inactivity
2. **Wake Up:** First visit takes ~30 seconds
3. **Keep Alive:** Use a service like UptimeRobot (optional)
4. **Logs:** Check regularly for errors
5. **Updates:** Push to GitHub = auto-deploy

---

## 🆘 Need Help?

**Render Documentation:**
- https://render.com/docs/web-services

**Common Issues:**
- Check Render logs first
- Verify environment variables
- Test locally before deploying

**Support:**
- Render Community: https://community.render.com/
- GitHub Issues: Create issue in your repo

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Code pushed to GitHub
- [ ] `requirements.txt` includes gunicorn
- [ ] `render.yaml` configured
- [ ] Images in `static/images/`
- [ ] `.env` in `.gitignore`

During deployment:
- [ ] Connected GitHub repo
- [ ] Set environment variables
- [ ] Selected free tier
- [ ] Clicked "Create Web Service"

After deployment:
- [ ] Site loads correctly
- [ ] All features work
- [ ] Mobile responsive
- [ ] Contact form tested
- [ ] Shared your portfolio!

---

**🎉 Congratulations! Your portfolio is now live on Render!**

Your URL: `https://your-app-name.onrender.com`
