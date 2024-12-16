const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

// Middleware to parse JSON body
app.use(express.json());

// GET route to fetch all feedback
app.get("/api/feedback", async (req, res) => {
  try {
    const feedback = await prisma.feedback.findMany();
    res.json(feedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "An error occurred while fetching feedback." });
  }
});

// POST route to add feedback
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

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
