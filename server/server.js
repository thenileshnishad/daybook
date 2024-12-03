const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const user = require("./routes/userRoutes");

app.use("/api/user", user);

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
