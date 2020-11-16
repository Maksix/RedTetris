/* eslint-disable */
import {OUT_JOIN_ROOM} from "../reducers/types"

export const socketMiddleware = socket => store => next => action => {
  console.log(`action ${action.type} invoked`);
  console.log(`store is`, store.getState());
  switch (action.type) {
    case OUT_JOIN_ROOM: {
      const { playerName, roomName } = action.payload;
      socket.emit(OUT_JOIN_ROOM, {playerName, roomName})
    }
  }
  return next(action);
}
