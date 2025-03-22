const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const entryRoutes = require("./routes/entryRoutes");

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/entries", entryRoutes);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.get("*", (req, res) => {
  return res.sendFile(
    path.resolve(__dirname, "../../frontend/dist/index.html")
  );
});

const PORT = process.env.PORT || 3001;
connectDB()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(
        `Please follow this link, daybook app started at: http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("Database not connected! " + error);
  });

module.exports = app;
