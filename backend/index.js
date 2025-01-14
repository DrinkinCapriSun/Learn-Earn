const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
