from flask import Flask, render_template, request, jsonify, send_file
from flask_mail import Mail, Message
from config import config
import os

app = Flask(__name__)

# Load configuration
env = os.environ.get('FLASK_ENV', 'development')
app.config.from_object(config[env])

mail = Mail(app)

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'{field.capitalize()} is required'}), 400
        
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        
        # Basic email validation
        if '@' not in email or '.' not in email:
            return jsonify({'success': False, 'message': 'Invalid email address'}), 400
        
        # Log message to console (works without email config)
        print(f"\n{'='*60}")
        print("📧 NEW CONTACT FORM SUBMISSION")
        print(f"{'='*60}")
        print(f"👤 Name: {name}")
        print(f"📧 Email: {email}")
        print(f"📌 Subject: {subject}")
        print(f"💬 Message:\n{message}")
        print(f"{'='*60}\n")
        
        # Check if mail is configured
        if app.config['MAIL_USERNAME'] and app.config['MAIL_PASSWORD'] and app.config['MAIL_PASSWORD'] != 'your-16-char-app-password-here':
            try:
                # Create email message
                msg = Message(
                    subject=f"Portfolio Contact: {subject}",
                    sender=app.config['MAIL_USERNAME'],
                    recipients=['dengalepooja8@gmail.com'],
                    reply_to=email
                )
                msg.body = f"""
New contact form submission from your portfolio:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
This message was sent from your portfolio contact form.
                """
                
                # Send email
                mail.send(msg)
                return jsonify({'success': True, 'message': 'Message sent successfully via email!'})
            except Exception as e:
                print(f"⚠️ Email sending failed: {str(e)}")
                return jsonify({'success': True, 'message': 'Message received! (Email not configured, check console logs)'})
        else:
            # Email not configured - still return success
            return jsonify({'success': True, 'message': 'Message received! Check the console for details.'})
    
    except Exception as e:
        print(f"❌ Error processing contact form: {str(e)}")
        return jsonify({'success': False, 'message': 'Failed to send message. Please try again later.'}), 500

@app.route('/download-cv')
def download_cv():
    try:
        return send_file('static/images/cv.png', as_attachment=True, download_name='Pooja_Dengale_CV.png')
    except Exception as e:
        return jsonify({'error': 'CV file not found'}), 404

@app.errorhandler(404)
def not_found(e):
    return render_template('index.html'), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=(env == 'development'))
