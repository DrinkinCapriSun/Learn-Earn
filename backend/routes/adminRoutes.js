const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ---------------------- Admin-Only Route: Upload Course ----------------------
router.post(
  "/upload_course",
  [
    // Validation rules
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be a positive number"),
  ],
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, price } = req.body;

    try {
      // Save the course to the database
      const course = await prisma.course.create({
        data: {
          title,
          description,
          price,
        },
      });

      res.status(201).json({ message: "Course uploaded successfully", course });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to upload course", error: error.message });
    }
  }
);

// ---------------------- Admin-Only Route: Get All Users ----------------------
router.get("/users", authMiddleware, roleMiddleware("admin"), async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
});

// ---------------------- Admin-Only Route: Delete a User ----------------------
router.delete("/users/:id", authMiddleware, roleMiddleware("admin"), async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await prisma.user.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete user", error: error.message });
  }
});

// ---------------------- Admin-Only Route: Update a Course ----------------------
router.put(
  "/courses/:id",
  [
    // Validation rules
    body("title").optional().notEmpty().withMessage("Title is required"),
    body("description").optional().notEmpty().withMessage("Description is required"),
    body("price").optional().isFloat({ gt: 0 }).withMessage("Price must be a positive number"),
  ],
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { title, description, price } = req.body;

    try {
      // Check if the course exists
      const course = await prisma.course.findUnique({ where: { id: parseInt(id) } });
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      // Update the course
      const updatedCourse = await prisma.course.update({
        where: { id: parseInt(id) },
        data: {
          title: title || course.title,
          description: description || course.description,
          price: price || course.price,
        },
      });

      res.status(200).json({ message: "Course updated successfully", course: updatedCourse });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update course", error: error.message });
    }
  }
);

// ---------------------- Admin-Only Route: Delete a Course ----------------------
router.delete("/courses/:id", authMiddleware, roleMiddleware("admin"), async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the course exists
    const course = await prisma.course.findUnique({ where: { id: parseInt(id) } });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Delete the course
    await prisma.course.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete course", error: error.message });
  }
});

module.exports = router;