const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./routes/bootcamp");

dotenv.config({ path: "./config/config.env" });
const app = express();

const logger = (req, res, next) => {
  req.hello = "hello";
  next();
};

app.use(logger);
app.use("/api/v1/bootcamp", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server Running in mode of ${process.env.PORT} on port ${PORT}`)
);