const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

app.listen(process.env.PORT, () => {
  console.log(`Listening on port : ${process.env.PORT}`);
});

app.get("/", (request, response) => {
  response.send("API is ready");
});

const db_username = encodeURIComponent(process.env.MONGODB_USERNAME);
const db_password = encodeURIComponent(process.env.MONGODB_PASSWORD);

const mongodb_connection_string = `mongodb+srv://${db_username}:${db_password}@backenddb.hy0xb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`;

mongoose
  .connect(mongodb_connection_string)
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.warn("Error connecting to DB : " + err));
