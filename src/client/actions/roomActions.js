import { OUT_JOIN_ROOM, JOIN_ROOM_ERROR, OUT_LEAVE_ROOM } from '../reducers/types';

export function joinRoom(playerName, roomName) {
  return {
    type: OUT_JOIN_ROOM,
    payload: {
      playerName,
      roomName,
    },
  };
}

export function joinRoomError(error) {
  return {
    type: JOIN_ROOM_ERROR,
    payload: error,
  };
}

export function leaveRoom(roomName) {
  return {
    type: OUT_LEAVE_ROOM,
    payload: roomName,
  };
}
