const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "learn&earn"; // Default fallback for JWT_SECRET

// ---------------------- User Registration ----------------------
router.post(
  "/register",
  [
    // Validation rules
    body("username").notEmpty().withMessage("Username is required."),
    body("email").isEmail().withMessage("A valid email is required."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters."),
  ],
  async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Check if the user already exists in the database
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "This email is already registered." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save the user in the database
      const newUser = await prisma.user.create({
        data: { username, email, password: hashedPassword },
      });

      res.status(201).json({
        message: "User registered successfully!",
        userId: newUser.id,
      });
    } catch (error) {
      console.error("Error during user registration:", error);
      res
        .status(500)
        .json({ error: "User registration failed. Please try again." });
    }
  }
);

// ---------------------- User Login ----------------------
router.post(
  "/login",
  [
    // Validation rules
    body("email").isEmail().withMessage("A valid email is required."),
    body("password").notEmpty().withMessage("Password is required."),
  ],
  async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if the user exists in the database
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      // Compare the entered password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      // Generate a JSON Web Token (JWT) for the authenticated user
      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: "1h" } // Token expires in 1 hour
      );

      res.status(200).json({
        message: "Login successful!",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Error during user login:", error);
      res.status(500).json({ error: "User login failed. Please try again." });
    }
  }
);

// ---------------------- Middleware for Protected Routes ----------------------
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Add user info to request object
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token." });
  }
};

// Example: Protected Route
router.get("/protected", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Access to protected route granted!" });
});

module.exports = router;
