# Portfolio Flask Application

A modern, responsive portfolio website built with Flask, featuring glassmorphism design, smooth animations, and a contact form.

## Features

- 🎨 Modern glassmorphism UI design
- 🌙 Dark theme with neon cyan highlights
- ✨ Smooth scroll animations
- 📱 Fully responsive design
- 📧 Contact form with email integration
- 🚀 Fast and lightweight
- 💼 Professional project showcase
- 📊 Animated skill progress bars

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Email**: Flask-Mail
- **Styling**: Custom CSS with Flexbox

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-main
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- Linux/Mac:
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create a `.env` file from `.env.example`:
```bash
copy .env.example .env
```

6. Configure your email settings in `.env`:
```
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
SECRET_KEY=your-secret-key-here
```

**Note**: For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833).

## Running the Application

1. Make sure your virtual environment is activated

2. Run the Flask application:
```bash
python app.py
```

3. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
portfolio-main/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore file
├── README.md              # This file
├── templates/
│   └── index.html         # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css      # Styles
│   ├── js/
│   │   └── script.js      # JavaScript
│   └── images/
│       ├── ME.png         # Profile image
│       └── cv.png         # CV file
```

## Customization

### Update Personal Information

Edit `templates/index.html` to update:
- Name and title
- About section content
- Skills and percentages
- Projects
- Experience timeline
- Contact information

### Update Styling

Edit `static/css/style.css` to customize:
- Colors (change CSS variables in `:root`)
- Fonts
- Spacing
- Animations

### Update Functionality

Edit `static/js/script.js` to modify:
- Typing effect phrases
- Animation timings
- Form behavior

## Deployment

### Deploy to Heroku

1. Create a `Procfile`:
```
web: gunicorn app:app
```

2. Add gunicorn to requirements.txt:
```bash
pip install gunicorn
pip freeze > requirements.txt
```

3. Deploy:
```bash
heroku create your-app-name
git push heroku main
```

### Deploy to PythonAnywhere

1. Upload files to PythonAnywhere
2. Create a virtual environment
3. Install requirements
4. Configure WSGI file
5. Reload web app

## Contact Form Setup

The contact form uses Flask-Mail to send emails. To enable it:

1. Use a Gmail account
2. Enable 2-factor authentication
3. Generate an App Password
4. Add credentials to `.env` file

## License

MIT License - feel free to use this for your own portfolio!

## Author

Pooja Dengale
- GitHub: [@pooja-dengale](https://github.com/pooja-dengale)
- Email: dengalepooja8@gmail.com
