// server/index.js

const express = require("express");
const path = require('path');
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get("/api", (req, res) => {
  res.json({ message: ` ${process.env.YOUTUBE_ENCODED}` });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});