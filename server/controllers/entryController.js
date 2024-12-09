const Entry = require("../models/entryModel");
const validator = require("validator");

const addEntry = async (req, res) => {
  const { date, mood, title, content } = req.body;
  const loggedUser = req.user;

  if (!validator.isDate(date)) {
    return res.status(400).json({
      message: "Please provide a valid date!",
    });
  }

  if (title.length > 20) {
    return res.status(400).json({
      message: "Title length should not be more than 20 characters!",
    });
  }

  if (content.length > 1500) {
    return res.status(400).json({
      message: "Content length should not be more than 1500 characters",
    });
  }

  try {
    const saveEntry = await Entry.create({
      createdBy: loggedUser._id,
      date,
      title,
      mood,
      content,
    });

    res.status(201).json({
      message: "Entry added successfully!",
      saveEntry,
    });
  } catch (error) {
    console.error("Error adding entry!: ", error);
    res.status(500).json({
      message: "Something went wrong! Please try again later!",
    });
  }
};

module.exports = { addEntry };
