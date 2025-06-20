const jwt = require("jsonwebtoken");

exports.generateTokens = (userId) => {
  const accessToken = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.ACCESS_EXPIRES_IN || "12h" }
  );

  return { accessToken };
};

exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

