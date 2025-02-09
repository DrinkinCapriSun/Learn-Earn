from flask import Blueprint, request, jsonify
from .models import User
from .tokens import generate_verification_token, verify_token
from .email import send_verification_email
from . import db

main = Blueprint('main', __name__)

@main.route('/register', methods=['POST'])
def register_user():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']

    # Check if the user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'User already exists'}), 400

    # Generate verification token
    token = generate_verification_token(email)

    # Save user with unverified email
    new_user = User(
        username=username,
        email=email,
        password=password,
        email_verified=False,
        verification_token=token
    )
    db.session.add(new_user)
    db.session.commit()

    # Send verification email
    send_verification_email(email, token)

    return jsonify({'message': 'User registered. Please check your email to verify your account.'})


@main.route('/verify-email/<token>', methods=['GET'])
def verify_email(token):
    email = verify_token(token)
    if email is None:
        return jsonify({'message': 'Invalid or expired token'}), 400

    user = User.query.filter_by(email=email).first()
    if user:
        user.email_verified = True
        user.verification_token = None
        db.session.commit()
        return jsonify({'message': 'Email verified successfully!'})
    else:
        return jsonify({'message': 'User not found'}), 404
