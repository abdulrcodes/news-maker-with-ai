const express = require("express");
const authenticateUser = require("../middlewares/authMiddleware"); // Adjust the path as needed
const {
  saveArticle,
  deleteArticle,
} = require("../controllers/articleController"); // Adjust the path as needed

const router = express.Router();

// Route to save an article (requires authentication)
router.post("/articles", authenticateUser, saveArticle);

// Route to delete an article by ID (requires authentication)
router.delete("/articles/:id", authenticateUser, deleteArticle);

module.exports = router;
