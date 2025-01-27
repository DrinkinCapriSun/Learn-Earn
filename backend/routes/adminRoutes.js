const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Admin-only route for uploading courses
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

module.exports = router;