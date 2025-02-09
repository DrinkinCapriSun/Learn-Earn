from itsdangerous import URLSafeTimedSerializer

SECRET_KEY = 'your-secret-key'
serializer = URLSafeTimedSerializer(SECRET_KEY)

def generate_verification_token(email):
    return serializer.dumps(email, salt='email-confirmation-salt')

def verify_token(token, expiration=3600):
    try:
        email = serializer.loads(token, salt='email-confirmation-salt', max_age=expiration)
        return email
    except:
        return None
