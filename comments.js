// Create web server
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.end(JSON.stringify(comments));
  } else {
    res.end('Hello World');
  }
});

server.listen(3000);