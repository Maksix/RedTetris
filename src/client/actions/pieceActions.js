import { GET_PIECES } from '../reducers/types';

export function getPieces(pieces) {
  return {
    type: GET_PIECES,
    payload: pieces,
  };
}
