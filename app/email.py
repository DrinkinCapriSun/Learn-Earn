from flask_mail import Message
from . import mail

def send_verification_email(email, token):
    verification_link = f"http://127.0.0.1:5000/verify-email/{token}"
    msg = Message(
        'Verify Your Email Address',
        sender='your-email@gmail.com',
        recipients=[email]
    )
    msg.body = f"Please verify your email by clicking the following link: {verification_link}"
    mail.send(msg)
