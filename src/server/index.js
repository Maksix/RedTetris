/* eslint-disable */
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

const socketService = (socket) => {
  socket.on('OUT_JOIN_ROOM', ({ playerName, roomName }) => {
    let currentRoom = rooms.find(room => room.name === roomName);
    if (!currentRoom) {
      currentRoom = new Room(roomName, new Player(playerName, socket.id, 'leader'));
      rooms.push(currentRoom);
    } else if (currentRoom.canJoin()) {
      currentRoom.addPlayer(new Player(playerName, socket.id));
    } else {
      socket.emit('JOIN_ROOM_ERROR', {error: 'full'})
    }
    socket.join(roomName);
    io.in(roomName).emit('UPDATE_PLAYER_LIST', currentRoom.players);
  });
  socket.on('disconnect', () => {
    const foundRoom = rooms.find((room) => room.players.find((player) => player.id === socket.id));
    if (foundRoom) {
      const newPlayers = foundRoom.players.filter(player => player.id !== socket.id);
      io.in(foundRoom.name).emit('UPDATE_PLAYER_LIST', newPlayers);
    }
  });
};

io.on('connection', socketService);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
