const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("../routes/authRoutes");
const articaleRoutes = require("../routes/articaleRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/news", articaleRoutes);

// Default Test Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running successfully!" });
});

module.exports = app;
