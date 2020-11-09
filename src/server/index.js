const express = require('express');
const http = require('http');
const sock = require('socket.io');
const Player = require('./Player/Player');
const Room = require('./Room/Room');

const app = express();
const port = 8000;
const server = http.createServer(app);
const io = sock(server);
const rooms = [];

// testing data
const testingPlayer = new Player('player', 'testId');
rooms['newRoom'] = new Room('roomName', testingPlayer);

io.on('connection', async (socket) => {
  const { roomName, playerName } = socket.handshake.query;
  if (!rooms[roomName]) {
    rooms[roomName] = new Room(roomName, new Player(playerName, socket.id, 'leader'));
  } else {
    rooms[roomName].addPlayer(new Player(playerName, socket.id));
  }
  socket.join(roomName);

  socket.on('disconnecting', () => {
    const socketRooms = Object.keys(socket.rooms);
    console.log(socketRooms);
  });
  console.log('rooms are', rooms);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
