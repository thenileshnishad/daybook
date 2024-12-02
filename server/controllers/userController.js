const User = require("../models/userModel");

const signup = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User already exist!",
      });
    }

    const user = await User.create({ email, firstName, lastName, password });

    res.status(201).json({
      message: "User signed up successfully!",
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { signup };
