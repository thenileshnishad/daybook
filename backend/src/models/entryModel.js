const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: { type: Date, required: true },
    title: String,
    mood: {
      type: String,
      enum: ["happy", "sad", "neutral", "excited", "angry"],
    },
    content: String,
  },
  { timestamps: true }
);

const entryModel = mongoose.model("Entry", entrySchema);

module.exports = entryModel;
