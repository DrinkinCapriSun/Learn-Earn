const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// JWT secret from environment variable or fallback for simplicity
const JWT_SECRET = process.env.JWT_SECRET || "learn&earn";

// Middleware setup
app.use(express.json());
app.use(cors({ origin: "http://localhost:5000" }));

// Middleware to check admin access
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

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(401).json({ error: "Unauthorized. Invalid token." });
  }
}

// -------------------- Feedback Routes -------------------- //

app.get("/api/feedback", async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
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

app.post("/api/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newFeedback = await prisma.feedback.create({ data: { name, email, message } });
    res.status(201).json(newFeedback);
  } catch (error) {
    console.error("Error creating feedback:", error);
    res.status(500).json({ error: "An error occurred while saving feedback." });
  }
});

// -------------------- Course Routes -------------------- //

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

app.get("/api/learning-hub/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const course = await prisma.course.findUnique({ where: { id: parseInt(id) } });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ error: "An error occurred while fetching the course." });
  }
});

app.delete("/api/learning-hub/courses/:id", isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.course.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Course deleted successfully." });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "An error occurred while deleting the course." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
