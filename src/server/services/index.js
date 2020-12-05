const { onJoinRoom, onLeaveRoom } = require('./roomService');
const { onDisconnect } = require('./connectService');
const { onStartGame, onGetPieces } = require('./gameService');

module.exports = (io) => {
  const rooms = [];

  const socketService = (socket) => {
    onJoinRoom(socket, io, rooms);
    onLeaveRoom(socket, io, rooms);
    onDisconnect(socket, io, rooms);
    onStartGame(socket, io, rooms);
    onGetPieces(socket, io, rooms);
  };

  io.on('connection', socketService);
};
