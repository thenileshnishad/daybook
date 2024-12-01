const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const connectDB = require("./config/database");

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Database not connected " + error);
  });
