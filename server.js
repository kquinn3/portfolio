const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

// Serve static assets in production

app.get("/resume", (req, res) => {
  let file = fs.createReadStream("./public/kevinquinn.pdf");
  file.pipe(res);
});

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
