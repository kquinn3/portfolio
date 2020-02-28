const express = require("express");
const colors = require("colors");
const path = require("path");

const app = express();

// Serve static assets in production

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
