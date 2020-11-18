/* eslint-disable */
import {OUT_JOIN_ROOM} from "../reducers/types"

export const socketMiddleware = socket => store => next => action => {
  console.log(`action ${action.type} invoked`);
  console.log(`store is`, store.getState());
  socket.on('UPDATE_PLAYER_LIST', (data) => {
    console.log(data)
  })
  switch (action.type) {
    case OUT_JOIN_ROOM: {
      const { playerName, roomName } = action.payload;
      console.log('emitting join room');
      socket.emit(OUT_JOIN_ROOM, {playerName, roomName})
    }
  }
  return next(action);
}
