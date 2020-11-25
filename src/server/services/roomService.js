const Room = require('../classes/Room/Room');
const Player = require('../classes/Player/Player');
const {
  OUT_JOIN_ROOM, JOIN_ROOM_ERROR, UPDATE_PLAYER_LIST, OUT_LEAVE_ROOM,
} = require('./types');

const onJoinRoom = (socket, io, rooms) => {
  socket.on(OUT_JOIN_ROOM, ({ playerName, roomName }) => {
    let currentRoom = rooms.find((room) => room.name === roomName);
    if (!currentRoom) {
      currentRoom = new Room(roomName, new Player(playerName, socket.id, 'leader'));
      rooms.push(currentRoom);
    } else if (currentRoom.canJoin()) {
      currentRoom.addPlayer(new Player(playerName, socket.id));
    } else {
      const errorMessage = 'full';
      socket.emit(JOIN_ROOM_ERROR, errorMessage);
      return;
    }
    socket.join(roomName);
    io.in(roomName).emit(UPDATE_PLAYER_LIST, currentRoom.players);
  });
};

const onLeaveRoom = (socket, io, rooms) => {
  socket.on(OUT_LEAVE_ROOM, ({ roomName }) => {
    const currentRoom = rooms.find((room) => room.name === roomName);
    if (currentRoom) {
      currentRoom.removePlayer(socket.id);
      socket.leave(roomName);
      io.in(roomName).emit(UPDATE_PLAYER_LIST, currentRoom.players);
    }
  });
};

module.exports = {
  onJoinRoom,
  onLeaveRoom,
};
