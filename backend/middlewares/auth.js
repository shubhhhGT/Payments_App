const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    // get the token from req header
    const token = req.header("Authorization").replace("Bearer ", "");

    // If token is not found
    if (!token) {
      res.status(403).json({ message: "token not found" });
    }

    // If token is found
    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    // Assign the payload to res.UserId so i can use it throughout the application
    req.userId = payload.userId;

    // call the next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
