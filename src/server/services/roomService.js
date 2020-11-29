const Room = require('../classes/Room/Room');
const Player = require('../classes/Player/Player');

const {
  OUT_JOIN_ROOM, JOIN_ROOM_ERROR, UPDATE_PLAYER_LIST, OUT_LEAVE_ROOM, UPDATE_ROLE,
} = require('./types');

const onJoinRoom = (socket, io, rooms) => {
  socket.on(OUT_JOIN_ROOM, ({ playerName, roomName }) => {
    let currentRoom = rooms.find((room) => room.name === roomName);
    console.log(currentRoom);
    if (!currentRoom) {
      currentRoom = new Room(roomName, new Player(playerName, socket.id, 'leader'));
      rooms.push(currentRoom);
      console.log('here');
      socket.emit(UPDATE_ROLE, 'leader');
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
      const newLeader = currentRoom?.players?.find((player) => player.role === 'leader');
      socket.leave(roomName);
      socket.emit(UPDATE_ROLE, 'player');
      if (newLeader?.id) {
        io.to(newLeader.id).emit(UPDATE_ROLE, 'leader');
        io.in(roomName).emit(UPDATE_PLAYER_LIST, currentRoom?.players);
      } else {
        rooms.splice(rooms.findIndex((room) => room.name === roomName), 1);
      }
    }
  });
};

module.exports = {
  onJoinRoom,
  onLeaveRoom,
};
