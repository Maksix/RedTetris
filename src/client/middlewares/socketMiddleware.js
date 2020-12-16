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
  OUT_BLOCK_ROW, OUT_CHANGE_MAP, CHANGE_MAP,
} from '../reducers/types';
import { updatePlayerList } from '../actions/updatePlayerListAction';
import { joinRoomError } from '../actions/roomActions';
import { updateRole } from '../actions/updateRoleAction';
import { startGame, blockRow, handleChangeMap } from '../actions/gameActions';
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
    store.dispatch(blockRow());
  });
  return (next) => (action) => {
    console.log(`action ${action.type} invoked`);
    console.log('store is', store.getState());
    switch (action.type) {
      case OUT_JOIN_ROOM: {
        socket.emit(OUT_JOIN_ROOM, action.payload);
        break;
      }
      case OUT_LEAVE_ROOM: {
        socket.emit(OUT_LEAVE_ROOM, action.payload);
        break;
      }
      case OUT_START_GAME: {
        socket.emit(OUT_START_GAME, action.payload);
        break;
      }
      case OUT_BLOCK_ROW: {
        socket.emit(OUT_BLOCK_ROW, action.payload);
        break;
      }
      case OUT_GET_PIECES: {
        socket.emit(OUT_GET_PIECES, action.payload);
        break;
      }
      case OUT_CHANGE_MAP: {
        socket.emit(OUT_CHANGE_MAP, action.payload);
        break;
      }
    }
    return next(action);
  };
};
