const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Save an article
exports.saveArticle = async (req, res) => {
  const { title, summary, url } = req.body;
  const userId = req.user.id; // Get user ID from the authenticated user

  try {
    const newArticle = await prisma.article.create({
      data: {
        title,
        summary,
        url,
        userId,
      },
    });
    res.status(201).json(newArticle);
  } catch (error) {
    console.error("Error saving article:", error);
    res.status(500).json({ message: "Error saving article" });
  }
};

// Delete an article by ID
exports.deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedArticle = await prisma.article.delete({
      where: { id: parseInt(id) },
    });
    res
      .status(200)
      .json({ message: "Article deleted successfully", deletedArticle });
  } catch (error) {
    console.error("Error deleting article:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(500).json({ message: "Error deleting article" });
  }
};
