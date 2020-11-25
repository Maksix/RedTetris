const express = require('express');
const http = require('http');
const sock = require('socket.io');
const websocketService = require('./services');

const app = express();
const port = 8000;
const server = http.createServer(app);
const io = sock(server);

websocketService(io);
server.listen(port);
