const jwt = require("jsonwebtoken");

const generateToken = (_id, res) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });

  res.cookie("token", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
};

module.exports = generateToken;
