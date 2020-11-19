const express = require('express');
const http = require('http');
const sock = require('socket.io');
const Room = require('./classes/Room/Room');
const Player = require('./classes/Player/Player');

const app = express();
const port = 8000;
const server = http.createServer(app);
const io = sock(server);

const rooms = [];

const socketService = (client) => {
  client.on('OUT_JOIN_ROOM', ({ playerName, roomName }) => {
    if (!rooms[roomName]) {
      rooms[roomName] = new Room(roomName, new Player(playerName, client.id, 'leader'));
    } else if (rooms[roomName].canJoin()) {
      rooms[roomName].addPlayer(new Player(playerName, client.id));
    }
    console.log(`player ${playerName} joined ${roomName}`);
    client.join(roomName);
    io.in(roomName).emit('UPDATE_PLAYER_LIST', rooms[roomName].players);
  });
  client.on('disconnecting', () => {
    // eslint-disable-next-line no-shadow
    const rooms = Object.keys(client.rooms);
    console.log(rooms);
  });
};

io.on('connection', socketService);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
