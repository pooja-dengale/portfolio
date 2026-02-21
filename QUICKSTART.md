# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

**Linux/Mac:**
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Step 2: Configure Environment (Optional)

For email functionality, create a `.env` file:

```bash
copy .env.example .env    # Windows
cp .env.example .env      # Linux/Mac
```

Edit `.env` and add your Gmail credentials:
```
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
SECRET_KEY=your-random-secret-key
```

**Note:** The app works without email configuration - messages will be logged to console.

### Step 3: Run the Application

**Option A - Using run script (Recommended):**

Windows:
```bash
run.bat
```

Linux/Mac:
```bash
chmod +x run.sh
./run.sh
```

**Option B - Manual:**
```bash
python app.py
```

**Open your browser:** http://localhost:5000

---

## 📧 Email Setup (Optional)

To enable the contact form email functionality:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your OS)
   - Copy the 16-character password
3. **Add to .env file:**
   ```
   MAIL_USERNAME=your-email@gmail.com
   MAIL_PASSWORD=your-16-char-app-password
   ```

---

## 🎨 Customization

### Update Your Information

Edit `templates/index.html`:
- Line 30-35: Your name and title
- Line 120-150: About section
- Line 180-280: Skills
- Line 300-400: Projects
- Line 450-550: Experience

### Change Colors

Edit `static/css/style.css`:
```css
:root {
  --primary-color: #22d3ee;  /* Change this */
  --secondary-color: #06b6d4; /* And this */
}
```

### Update Images

Replace files in `static/images/`:
- `ME.png` - Your profile photo
- `cv.png` - Your CV/Resume

---

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Change port in app.py (last line):
app.run(debug=True, port=5001)
```

**Email not sending:**
- Check your Gmail App Password
- Verify .env file exists and has correct credentials
- Check console for error messages

**Static files not loading:**
- Clear browser cache (Ctrl+Shift+R)
- Check file paths in templates/index.html

---

## 📦 Project Structure

```
portfolio-main/
├── app.py              # Main Flask application
├── config.py           # Configuration settings
├── requirements.txt    # Python dependencies
├── .env               # Environment variables (create this)
├── templates/
│   └── index.html     # Main page template
├── static/
│   ├── css/
│   │   └── style.css  # Styles
│   ├── js/
│   │   └── script.js  # JavaScript
│   └── images/        # Images
└── run.bat/run.sh     # Quick start scripts
```

---

## 🚀 Deployment

### Heroku
```bash
# Add Procfile
echo "web: gunicorn app:app" > Procfile

# Add gunicorn
pip install gunicorn
pip freeze > requirements.txt

# Deploy
heroku create your-app-name
git push heroku main
```

### PythonAnywhere
1. Upload files
2. Create virtual environment
3. Install requirements
4. Configure WSGI
5. Set environment variables

---

## 💡 Tips

- **Development:** Keep `FLASK_ENV=development` in .env
- **Production:** Set `FLASK_ENV=production` and use a strong SECRET_KEY
- **Testing:** Contact form works without email - check console logs
- **Performance:** Use a production WSGI server (gunicorn, waitress)

---

## 📞 Need Help?

- Check README.md for detailed documentation
- Review error messages in console
- Verify all dependencies are installed
- Ensure Python 3.7+ is installed

---

**Enjoy your new portfolio! 🎉**
