const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const admin = require("../firebaseAdmin");

const googleAuth = async (req, res) => {
  const { idToken } = req.body; // Extract idToken from the request body

  try {
    // Verify the ID token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email, name } = decodedToken; // Extract UID, email, and name from decoded token

    // Check if the user already exists in your database
    let user = await prisma.user.findUnique({ where: { uid } });

    // If user does not exist, create a new user
    if (!user) {
      user = await prisma.user.create({
        data: {
          uid, // Firebase UID
          email, // User email
          name, // Optional user name
        },
      });
    }

    // Send back the user data and token
    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Error in Google Authentication:", error);
    res.status(500).send("Error registering or logging in user");
  }
};

module.exports = googleAuth;
