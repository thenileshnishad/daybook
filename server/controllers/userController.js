const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const generateToken = require("../utils/generateToken");

const signup = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    if (!email || !firstName || !lastName || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (email.length > 50) {
      return res
        .status(400)
        .json({ message: "Email cannot exceed 50 characters" });
    }

    if (firstName.length > 50) {
      return res
        .status(400)
        .json({ message: "First name cannot exceed 50 characters" });
    }

    if (lastName.length > 50) {
      return res
        .status(400)
        .json({ message: "Last name cannot exceed 50 characters" });
    }

    if (password.length > 100) {
      return res
        .status(400)
        .json({ message: "Password cannot exceed 100 characters" });
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(400).json({ message: "Please enter strong password" });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User already exist!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (passwordCompare) {
      generateToken(user._id, res);
      res.json({
        message: "User signed up successfully!",
        data: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    } else {
      return res.status(401).json({ message: "Invalid credentials!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};

const logout = (req, res) => {
  res.cookie("token", null, { expires: new Date(0) });
  res.status(200).json({ message: "Logout successfully!" });
};

module.exports = { signup, login, logout };
