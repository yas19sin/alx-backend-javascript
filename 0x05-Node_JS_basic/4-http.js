const http = require('http');

/**
 * Creates a small HTTP server
 */
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ALX!');
});

app.listen(1245);

module.exports = app;
