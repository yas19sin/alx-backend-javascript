const express = require('express');

/**
 * Creates a small HTTP server using Express
 */
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello ALX!');
});

app.listen(1245);

module.exports = app;
