from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import datetime
import os

# Centralized Secret Key
SECRET_KEY = 'learn&earn'  # Replace with your secure secret key

# Initialize Flask app
app = Flask(__name__)

# JWT Configuration
app.config['SECRET_KEY'] = SECRET_KEY
app.config['JWT_SECRET_KEY'] = SECRET_KEY
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(hours=1)  # Token expiration time

# Initialize JWT Manager
jwt = JWTManager(app)

# Dummy user database (in-memory)
users = {
    "admin_user": {"password": "admin123", "role": "admin"},
    "test_user": {"password": "test123", "role": "user"}
}

@app.route('/api/auth/register', methods=['POST'])
def register():
    """Register a new user and return a JWT token."""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    if username in users:
        return jsonify({"error": "User already exists"}), 409

    # Add new user to dummy database
    users[username] = {"password": password, "role": "user"}
    token = create_access_token(identity={"username": username, "role": "user"})
    return jsonify({
        "message": "User registered successfully",
        "access_token": token
    }), 201


@app.route('/api/auth/login', methods=['POST'])
def login():
    """Authenticate user and return a JWT token."""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    user = users.get(username)
    if not user or user["password"] != password:
        return jsonify({"error": "Invalid username or password"}), 401

    token = create_access_token(identity={"username": username, "role": user["role"]})
    return jsonify({
        "message": "Login successful",
        "access_token": token
    }), 200


@app.route('/api/protected/resource', methods=['GET'])
@jwt_required()
def protected():
    """Access protected resource with a valid JWT token."""
    current_user = get_jwt_identity()
    return jsonify({
        "message": "Access granted to protected resource!",
        "current_user": current_user
    }), 200


@app.route('/api/auth/users', methods=['GET'])
@jwt_required()
def list_users():
    """List all registered users (admin only)."""
    current_user = get_jwt_identity()

    # Check if the user is an admin
    if current_user["role"] != "admin":
        return jsonify({"error": "Admin privileges required"}), 403

    return jsonify({"users": list(users.keys())}), 200


if __name__ == "__main__":
    app.run(debug=True)
