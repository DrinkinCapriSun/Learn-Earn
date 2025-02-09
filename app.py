from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import datetime
import psycopg2

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

# PostgreSQL Connection
DB_HOST = "localhost"
DB_NAME = "your_database_name"
DB_USER = "your_username"
DB_PASSWORD = "your_password"

def get_db_connection():
    """Connect to PostgreSQL."""
    conn = psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    return conn

@app.route('/api/auth/register', methods=['POST'])
def register():
    """Register a new user and return a JWT token."""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    try:
        conn = get_db_connection()
        cur = conn.cursor()
        # Check if the user already exists
        cur.execute("SELECT username FROM users WHERE username = %s", (username,))
        if cur.fetchone():
            return jsonify({"error": "User already exists"}), 409

        # Insert new user into the database
        cur.execute(
            "INSERT INTO users (username, password, role) VALUES (%s, %s, %s)",
            (username, password, "user")
        )
        conn.commit()
        cur.close()
        conn.close()

        token = create_access_token(identity={"username": username, "role": "user"})
        return jsonify({
            "message": "User registered successfully",
            "access_token": token
        }), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/auth/login', methods=['POST'])
def login():
    """Authenticate user and return a JWT token."""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    try:
        conn = get_db_connection()
        cur = conn.cursor()
        # Retrieve user from the database
        cur.execute("SELECT username, password, role FROM users WHERE username = %s", (username,))
        user = cur.fetchone()
        cur.close()
        conn.close()

        if not user or user[1] != password:
            return jsonify({"error": "Invalid username or password"}), 401

        token = create_access_token(identity={"username": user[0], "role": user[2]})
        return jsonify({
            "message": "Login successful",
            "access_token": token
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

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

    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT username FROM users")
        users = [row[0] for row in cur.fetchall()]
        cur.close()
        conn.close()

        return jsonify({"users": users}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
