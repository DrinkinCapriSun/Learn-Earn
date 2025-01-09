const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

// Static JWT secret for simplicity
const JWT_SECRET = "learn&earn";

// Middleware to parse JSON body
app.use(express.json());

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
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "An error occurred while fetching feedback." });
  }
});

// Add Feedback
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

// Pagination and Search for Courses
app.get("/api/learning-hub/courses", async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const skip = (page - 1) * limit;

  try {
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
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "An error occurred while fetching courses." });
  }
});

// Add a New Course (Admin-only)
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

// Get a Single Course by ID
app.get("/api/learning-hub/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(id) },
    });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ error: "An error occurred while fetching the course." });
  }
});

// Delete a Course (Admin-only)
app.delete("/api/learning-hub/courses/:id", isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.course.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Course deleted successfully." });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "An error occurred while deleting the course." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
