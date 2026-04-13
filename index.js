const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello !");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log("Server is running on " + `http://localhost:${PORT}`),
);
