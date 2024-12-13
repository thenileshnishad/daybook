const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const entryController = require("../controllers/entryController");

router.post("/", authMiddleware, entryController.addEntry);
router.get("/", authMiddleware, entryController.getAllEntries);
router.get("/:id", authMiddleware, entryController.getEntryById);
router.patch("/:id", authMiddleware, entryController.updateEntry);
router.delete("/:id", authMiddleware, entryController.deleteEntry);

module.exports = router;
