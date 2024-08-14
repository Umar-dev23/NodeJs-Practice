const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'homepr.html'));
});


app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
