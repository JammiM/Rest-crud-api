const express = require("express");
require("dotenv").config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port : ${process.env.PORT}`);
});

app.get("/", (request, response) => {
  response.send("API is ready");
});
