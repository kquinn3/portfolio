const express = require("express");
const colors = require("colors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/api", (req, res) => {
  res.send("Hello Kevin");
});

app.get("*", (req, res) => {
  res.send(express.static(path.join(__dirname, "./client/build/index.html")));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
