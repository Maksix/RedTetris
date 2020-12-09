/* eslint-disable */
import {
  JOIN_ROOM_ERROR,
  OUT_JOIN_ROOM,
  OUT_LEAVE_ROOM,
  UPDATE_PLAYER_LIST,
  UPDATE_ROLE,
  START_GAME,
  OUT_START_GAME,
  OUT_GET_PIECES,
  GET_PIECES,
  BLOCK_ROW,
  OUT_BLOCK_ROW
} from '../reducers/types'
import { updatePlayerList } from '../actions/updatePlayerListAction';
import { joinRoomError } from '../actions/roomActions';
import { updateRole } from '../actions/updateRoleAction';
import { startGame, blockRow } from '../actions/gameActions';
import { getPieces } from '../actions/pieceActions';

export const socketMiddleware = (socket) => (store) => {
  socket.on(UPDATE_PLAYER_LIST, (players) => {
    store.dispatch(updatePlayerList(players));
  });
  socket.on(JOIN_ROOM_ERROR, (error) => {
    store.dispatch(joinRoomError(error));
  });
  socket.on(UPDATE_ROLE, (role) => {
    store.dispatch(updateRole(role));
  });
  socket.on(START_GAME, (options) => {
    store.dispatch(startGame(options));
  });
  socket.on(GET_PIECES, (pieces) => {
    store.dispatch(getPieces(pieces));
  });
  socket.on(BLOCK_ROW, () => {
    store.dispatch(blockRow())
  });
  return (next) => (action) => {
    console.log(`action ${action.type} invoked`);
    console.log('store is', store.getState());
    switch (action.type) {
      case OUT_JOIN_ROOM: {
        const { playerName, roomName } = action.payload;
        socket.emit(OUT_JOIN_ROOM, { playerName, roomName });
        break;
      }
      case OUT_LEAVE_ROOM: {
        const { playerName, roomName } = action.payload;
        socket.emit(OUT_LEAVE_ROOM, { playerName, roomName });
        break;
      }
      case OUT_START_GAME: {
        const { options, roomName } = action.payload;
        socket.emit(OUT_START_GAME, { roomName, options });
        break;
      }
      case OUT_BLOCK_ROW: {
        const roomName = action.payload;
        socket.emit(OUT_BLOCK_ROW, { roomName })
        break;
      }
      case OUT_GET_PIECES: {
        const { roomName } = action.payload;
        socket.emit(OUT_GET_PIECES, { roomName });
        break;
      }
    }
    return next(action);
  };
};
