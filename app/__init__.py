from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail

# Initialize extensions
db = SQLAlchemy()
mail = Mail()

def create_app():
    app = Flask(__name__)

    # App configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:donny@localhost/donnydb'
    app.config['SECRET_KEY'] = 'replace-this-with-a-strong-secret-key'
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = 'donny@example.com'  # Replace with your email
    app.config['MAIL_PASSWORD'] = 'password123'  # Replace with your email password

    # Initialize extensions
    db.init_app(app)
    mail.init_app(app)

    # Register routes
    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
