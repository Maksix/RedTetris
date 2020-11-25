const { onJoinRoom, onLeaveRoom } = require('./roomService');
const { onDisconnect } = require('./connectService');

module.exports = (io) => {
  const rooms = [];

  const socketService = (socket) => {
    onJoinRoom(socket, io, rooms);
    onLeaveRoom(socket, io, rooms);
    onDisconnect(socket, io, rooms);
  };

  io.on('connection', socketService);
};
