const express = require('express');

/**
 * Creates a small HTTP server using Express
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(1245, () => {
  console.log('Server running at port 1245');
});

module.exports = app;
