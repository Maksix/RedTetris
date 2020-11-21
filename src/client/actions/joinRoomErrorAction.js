import { JOIN_ROOM_ERROR } from '../reducers/types';

export function joinRoomError(error) {
  return {
    type: JOIN_ROOM_ERROR,
    payload: error,
  };
}
