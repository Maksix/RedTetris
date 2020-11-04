/* eslint-disable */
const express = require('express');
const http = require('http');
const socket = require('socket.io')

const app = express();
const port = 8000;
const server = http.createServer(app);
const io = socket(server);

io.on('connection', async(socket) => {
  const {message} = socket.handshake.query
  console.log(message)
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
