const {
  OUT_START_GAME, START_GAME, OUT_GET_PIECES, GET_PIECES,
  BLOCK_ROW, OUT_BLOCK_ROW, OUT_CHANGE_MAP,
  UPDATE_PLAYER_LIST,
} = require('./types');
const Piece = require('../classes/Piece/Piece');

const generatePieces = () => {
  const pieceBlock = [];
  for (let i = 0; i < 100; i += 1) {
    pieceBlock[i] = new Piece();
  }
  return pieceBlock;
};

const onStartGame = (socket, io, rooms) => {
  socket.on(OUT_START_GAME, ({ roomName, options }) => {
    const currentRoom = rooms.find((room) => room.name === roomName);
    if (currentRoom) {
      io.in(roomName).emit(START_GAME, options);
    }
  });
};

const onBLockRow = (socket, io, rooms) => {
  socket.on(OUT_BLOCK_ROW, (roomName) => {
    const currentRoom = rooms.find((room) => room.name === roomName);
    if (currentRoom) {
      socket.to(roomName).emit(BLOCK_ROW);
    }
  });
};

const onGetPieces = (socket, io, rooms) => {
  socket.on(OUT_GET_PIECES, ({ roomName }) => {
    const currentRoom = rooms.find((room) => room.name === roomName);
    if (currentRoom) {
      const player = currentRoom.findPlayer(socket.id);
      player.pieceOrder = player.pieceOrder ? player.pieceOrder + 1 : 0;
      if (!currentRoom.piecesBlock?.[player.pieceOrder]) {
        currentRoom.piecesBlock[player.pieceOrder] = generatePieces();
      }
      const pieces = currentRoom.piecesBlock[player.pieceOrder];
      socket.emit(GET_PIECES, pieces.map((piece) => piece.figure));
    }
  });
};

const onChangeMap = (socket, io, rooms) => {
  socket.on(OUT_CHANGE_MAP, ({ roomName, map }) => {
    const currentRoom = rooms.find((room) => room.name === roomName);
    if (currentRoom) {
      const player = currentRoom.findPlayer(socket.id);
      player.updateMap(map);
      io.in(roomName).emit(UPDATE_PLAYER_LIST, currentRoom?.players);
    }
  });
};

module.exports = {
  onStartGame,
  onGetPieces,
  onBLockRow,
  onChangeMap,
};
