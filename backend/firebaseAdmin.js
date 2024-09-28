const admin = require("firebase-admin");

// Parse the environment variable and ensure newlines are handled correctly
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Fix the private key to handle line breaks
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
