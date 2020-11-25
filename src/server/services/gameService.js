const { OUT_START_GAME, START_GAME } = require('./types');

const onStartGame = (socket, io, rooms) => {
  socket.on(OUT_START_GAME, ({ roomName, options }) => {
    const currentRoom = rooms.find((room) => room.name === roomName);
    if (currentRoom) {
      io.in(roomName).emit(START_GAME, options);
    }
  });
};

module.exports = {
  onStartGame,
};
