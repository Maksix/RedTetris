const app = require('express')();
const http = require('http');
const sock = require('socket.io');
const websocketService = require('./services');

const server = http.createServer(app);
const io = sock(server);
websocketService(io);

server.listen(8000);
