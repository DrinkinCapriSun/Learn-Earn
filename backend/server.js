const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON body
app.use(express.json());

// GET route for testing
app.get("/api/feedback", (req, res) => {
  res.json({ message: "GET request to /api/feedback is working!" });
});

// POST route to handle feedback
app.post("/api/feedback", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  res.status(201).json({ message: "Feedback received!" });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
