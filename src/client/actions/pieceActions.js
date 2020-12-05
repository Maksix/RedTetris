import { GET_PIECES, OUT_GET_PIECES } from '../reducers/types';

export function getPieces(pieces) {
  return {
    type: GET_PIECES,
    payload: pieces,
  };
}

export function getNewPieces(roomName) {
  return {
    type: OUT_GET_PIECES,
    payload: { roomName },
  };
}
