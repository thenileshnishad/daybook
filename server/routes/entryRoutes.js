const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const entryController = require("../controllers/entryController");

router.post("/", authMiddleware, entryController.addEntry);
router.get("/", authMiddleware, entryController.getAllEntries);

module.exports = router;
