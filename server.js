const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "config.env" });

const morgan = require("morgan");

// DB Connect
mongoose
  .connect(process.env.DB)
  .then((conn) => {
    console.log(`DB Connected with ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(`DB Error: ${err}`);
    process.exit(1);
  });

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`App in ${process.env.NODE_ENV} mode`);
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT} Successfully`);
});
