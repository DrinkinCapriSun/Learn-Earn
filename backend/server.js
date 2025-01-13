const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
<<<<<<< HEAD
=======
const cors = require("cors");
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

<<<<<<< HEAD
// Static JWT secret for simplicity
const JWT_SECRET = "learn&earn";
=======
// Static JWT secret for simplicity (move to environment variable for production)
const JWT_SECRET = process.env.JWT_SECRET || "learn&earn";
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be

// Middleware to parse JSON body
app.use(express.json());

<<<<<<< HEAD
// Middleware to check if the user is an admin
function isAdmin(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Authorization" header

  if (!token) {
    return res.status(401).json({ error: "Unauthorized. Token is required." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify the token using the secret
    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }
    req.user = decoded; // Attach user data to the request object
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(401).json({ error: "Unauthorized. Invalid token." });
  }
}

// Pagination and Search for Feedback
app.get("/api/feedback", async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query; // Default values: page = 1, limit = 10
  const skip = (page - 1) * limit;

  try {
    const feedback = await prisma.feedback.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { message: { contains: search, mode: "insensitive" } },
        ],
      },
      skip: parseInt(skip),
      take: parseInt(limit),
    });
    const totalFeedback = await prisma.feedback.count({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { message: { contains: search, mode: "insensitive" } },
        ],
      },
    });

    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(totalFeedback / limit),
      data: feedback,
    });
=======
// Enable CORS for frontend requests
app.use(cors({ origin: "http://localhost:3000" })); // Adjust the origin in production

// -------------------- Middleware -------------------- //

// Middleware to check if the user is an admin
function isAdmin(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized. Token is required." });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }

    req.user = decoded; // Attach user details to the request object
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(401).json({ error: "Unauthorized. Invalid token." });
  }
}

// -------------------- Feedback Routes -------------------- //

// Get all feedback
app.get("/api/feedback", async (req, res) => {
  try {
    const feedback = await prisma.feedback.findMany();
    res.status(200).json(feedback);
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "An error occurred while fetching feedback." });
  }
});

<<<<<<< HEAD
// Add Feedback
=======
// Submit new feedback
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
app.post("/api/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newFeedback = await prisma.feedback.create({
      data: { name, email, message },
    });
    res.status(201).json(newFeedback);
  } catch (error) {
    console.error("Error creating feedback:", error);
    res.status(500).json({ error: "An error occurred while saving feedback." });
  }
});

<<<<<<< HEAD
// Pagination and Search for Courses
=======
// -------------------- Courses Routes -------------------- //

// Get all courses
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
app.get("/api/learning-hub/courses", async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const skip = (page - 1) * limit;

  try {
<<<<<<< HEAD
    const courses = await prisma.course.findMany({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
      skip: parseInt(skip),
      take: parseInt(limit),
    });

    const totalCourses = await prisma.course.count({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
    });

    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(totalCourses / limit),
      data: courses,
    });
=======
    const courses = await prisma.course.findMany();
    res.status(200).json(courses);
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "An error occurred while fetching courses." });
  }
});

<<<<<<< HEAD
// Add a New Course (Admin-only)
=======
// Add a new course (Admin-only)
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
app.post("/api/learning-hub/courses", isAdmin, async (req, res) => {
  const { title, description, scormUrl } = req.body;

  if (!title || !description || !scormUrl) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newCourse = await prisma.course.create({
      data: { title, description, scormUrl },
    });
    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "An error occurred while saving the course." });
  }
});

<<<<<<< HEAD
// Get a Single Course by ID
=======
// Get a specific course by ID
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
app.get("/api/learning-hub/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(id) },
    });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ error: "An error occurred while fetching the course." });
  }
});

<<<<<<< HEAD
// Delete a Course (Admin-only)
=======
// Delete a course (Admin-only)
>>>>>>> f256d3345487b437887d216b7765b74ba89e81be
app.delete("/api/learning-hub/courses/:id", isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.course.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Course deleted successfully." });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "An error occurred while deleting the course." });
  }
});

// -------------------- User Management Routes -------------------- //

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
});

// Create a new user
app.post("/api/users", async (req, res) => {
  const { username, email, role } = req.body;

  if (!username || !email || !role) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newUser = await prisma.user.create({
      data: { username, email, role },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "An error occurred while creating the user." });
  }
});

// Delete a user (Admin-only)
app.delete("/api/users/:id", isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "An error occurred while deleting the user." });
  }
});

// -------------------- Start the Server -------------------- //

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
