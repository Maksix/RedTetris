/* eslint-disable */
import {
  JOIN_ROOM_ERROR,
  OUT_JOIN_ROOM,
  UPDATE_PLAYER_LIST
} from '../reducers/types'
import { updatePlayerList } from '../actions/updatePlayerListAction';
import {joinRoomError} from "../actions/joinRoomErrorAction"

export const socketMiddleware = (socket) => (store) => (next) => (action) => {
  console.log(`action ${action.type} invoked`);
  console.log('store is', store.getState());
  socket.on(UPDATE_PLAYER_LIST, (players) => {
    store.dispatch(updatePlayerList(players));
  });
  socket.on(JOIN_ROOM_ERROR, (error) => {
    store.dispatch(joinRoomError(error));
  })
  socket.on();
  switch (action.type) {
    case OUT_JOIN_ROOM: {
      const { playerName, roomName } = action.payload;
      socket.emit(OUT_JOIN_ROOM, { playerName, roomName });
    }
  }
  return next(action);
};
