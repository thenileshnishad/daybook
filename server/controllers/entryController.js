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

const getAllEntries = async (req, res) => {
  const loggedUser = req.user;

  try {
    const entries = await Entry.find({ createdBy: loggedUser._id }).populate(
      "createdBy",
      "firstName lastName"
    );

    res
      .status(200)
      .json({ message: "Entries fetch successfully!", data: entries });
  } catch (error) {
    console.error("Error fetching entries!: ", error);
    res.status(500).json({
      message: "Something went wrong! Please try again later!",
    });
  }
};

const getEntryById = async (req, res) => {
  const loggedUser = req.user;
  const entryId = req.params.id;

  try {
    const entry = await Entry.findOne({
      _id: entryId,
      createdBy: loggedUser._id,
    }).populate("createdBy", "firstName lastName");

    if (!entry) {
      return res.status(404).json({
        message: "Entry not found or does not belong to the logged-in user!",
      });
    }

    res.status(200).json({ message: "Entry fetch successfully!", data: entry });
  } catch (error) {
    console.error("Error fetching this entry!: ", error);
    res.status(500).json({
      message: "Something went wrong! Please try again later!",
    });
  }
};

const updateEntry = async (req, res) => {
  const loggedUser = req.user;
  const entryId = req.params.id;
  const { date, title, mood, content } = req.body;

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
    const entry = await Entry.findOneAndUpdate(
      { _id: entryId, createdBy: loggedUser._id },
      { date, title, mood, content },
      { new: true }
    );

    if (!entry) {
      return res
        .status(404)
        .json({ message: "Entry not found or not updated!" });
    }

    res
      .status(200)
      .json({ message: "Entry updated successfully!", data: entry });
  } catch (error) {
    console.error("Error updating this entry!: ", error);
    res.status(500).json({
      message: "Something went wrong! Please try again later!",
    });
  }
};

module.exports = { addEntry, getAllEntries, getEntryById, updateEntry };
