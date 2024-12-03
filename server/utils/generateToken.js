const jwt = require("jsonwebtoken");

const generateToken = (_id, res) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET);
  res.cookie("token", token);
};

module.exports = generateToken;
