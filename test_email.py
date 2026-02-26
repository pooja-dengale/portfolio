"""
Email Configuration Test Script
Run this to test if your email setup is working
"""

from flask import Flask
from flask_mail import Mail, Message
from config import config
import os

# Create Flask app
app = Flask(__name__)

# Load configuration
env = os.environ.get('FLASK_ENV', 'development')
app.config.from_object(config[env])

# Initialize mail
mail = Mail(app)

def test_email_config():
    """Test email configuration"""
    print("\n" + "="*60)
    print("EMAIL CONFIGURATION TEST")
    print("="*60)
    
    # Check if email is configured
    username = app.config.get('MAIL_USERNAME')
    password = app.config.get('MAIL_PASSWORD')
    
    print(f"\n📧 Email Username: {username}")
    print(f"🔑 Password Set: {'Yes' if password else 'No'}")
    print(f"🔒 Password Length: {len(password) if password else 0} characters")
    
    if not username or not password:
        print("\n❌ ERROR: Email not configured!")
        print("\nPlease update your .env file with:")
        print("  MAIL_USERNAME=your-email@gmail.com")
        print("  MAIL_PASSWORD=your-16-char-app-password")
        print("\nGet App Password from: https://myaccount.google.com/apppasswords")
        return False
    
    # Check password format
    if len(password) != 16:
        print("\n⚠️  WARNING: App Password should be 16 characters")
        print("   Your password length:", len(password))
        print("\n   If using regular password, this won't work!")
        print("   Get App Password from: https://myaccount.google.com/apppasswords")
    
    print("\n" + "="*60)
    print("SENDING TEST EMAIL...")
    print("="*60)
    
    try:
        # Create test message
        msg = Message(
            subject="Test Email from Portfolio",
            sender=username,
            recipients=[username]  # Send to yourself
        )
        msg.body = """
This is a test email from your Flask portfolio application.

If you received this email, your email configuration is working correctly!

✅ Email setup successful!

---
Sent from your Portfolio Contact Form
        """
        
        # Send email
        with app.app_context():
            mail.send(msg)
        
        print("\n✅ SUCCESS! Test email sent!")
        print(f"\n📬 Check your inbox: {username}")
        print("   (Email may take 1-2 minutes to arrive)")
        print("   Don't forget to check spam folder!")
        
        return True
        
    except Exception as e:
        print(f"\n❌ ERROR: Failed to send email")
        print(f"\nError message: {str(e)}")
        print("\n🔧 Common fixes:")
        print("   1. Use Gmail App Password (not regular password)")
        print("   2. Enable 2-Factor Authentication on Gmail")
        print("   3. Generate App Password: https://myaccount.google.com/apppasswords")
        print("   4. Update .env file with App Password")
        print("   5. Restart this script")
        
        return False

if __name__ == '__main__':
    print("\n🚀 Starting Email Configuration Test...\n")
    
    success = test_email_config()
    
    print("\n" + "="*60)
    if success:
        print("✅ EMAIL TEST COMPLETED SUCCESSFULLY!")
        print("\nYour contact form should now work!")
        print("Test it at: http://localhost:5000")
    else:
        print("❌ EMAIL TEST FAILED")
        print("\nPlease fix the issues above and run this script again.")
        print("\nFor detailed help, see: EMAIL_SETUP_GUIDE.md")
    print("="*60 + "\n")
