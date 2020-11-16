import { OUT_JOIN_ROOM } from '../reducers/types';

export function joinRoom(playerName, roomName) {
  return {
    type: OUT_JOIN_ROOM,
    payload: {
      playerName,
      roomName,
    },
  };
}
