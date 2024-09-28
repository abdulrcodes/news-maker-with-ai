const admin = require("../firebaseAdmin");

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get the token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the token using Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Attach user information to the request object
    req.user = {
      id: decodedToken.uid, // Firebase UID
      email: decodedToken.email, // User email
      name: decodedToken.name, // Optional name
    };

    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateUser;
