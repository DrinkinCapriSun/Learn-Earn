const jwt = require("jsonwebtoken");

// Static JWT secret for simplicity
const JWT_SECRET = "learn&earn";

// Sample payload for an admin user
const payload = {
  id: 1,
  username: "admin",
  role: "admin",
};

// Generate the token
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

// Output the JWT token and the correct Authorization header
console.log("JWT Token:", token);
console.log("Use this in your Authorization header:");
console.log(`Authorization: Bearer ${token}`);
