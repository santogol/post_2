// index.js
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve i file statici dalla cartella "public"
app.use(express.static(path.join(__dirname, "public")));

// Rotta principale: serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
