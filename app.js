const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/authenticationRoute");
// const testRoute = require('./routes/testRoute');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected sucessfully");
  })
  .catch((error) => {
    console.log("an error occured", error);
  });

app.use("/auth", authRoute);
// app.use('/test', testRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
