const express = require('express');
const http = require('http');
const sock = require('socket.io');
const socketService = require('./services/socket-io');

const app = express();
const port = 8000;
const server = http.createServer(app);
const io = sock(server);

io.on('connection', socketService);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
