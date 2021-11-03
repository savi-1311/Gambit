/* ENTRYPOINT TO THE APPLICATION */

// Importing all packages
const express = require('express');

//creating express app
const app = express();

// Running the server at default PORT 8000
const port = 8000;
const server = app.listen(port, () => {
  console.log(`Backend Server is Live!\nListening on port: ${port}`);
});

module.exports = app;