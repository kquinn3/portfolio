const express = require("express");
const colors = require("colors");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Kevin");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
