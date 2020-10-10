/* eslint-disable */
const express = require('express');
const cors = require('cors');
const http = require('http');
const sock = require('socket.io');

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const server = http.createServer(app);
const io = sock(server);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
