const { UPDATE_PLAYER_LIST } = require('./types');

const onDisconnect = (socket, io, rooms) => {
  socket.on('disconnect', () => {
    // eslint-disable-next-line max-len
    const currentRoom = rooms.find((room) => room.players.find((player) => player.id === socket.id));
    if (currentRoom) {
      currentRoom.removePlayer(socket.id);
      io.in(currentRoom.name).emit(UPDATE_PLAYER_LIST, currentRoom.players);
    }
  });
};

module.exports = {
  onDisconnect,
};
