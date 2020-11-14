import { GET_TETRAMINOS, REQUEST_TETRAMINOS } from '../reducers/types';

export function getTetraminos(socket) {
  socket.emit(REQUEST_TETRAMINOS);
  return {
    type: REQUEST_TETRAMINOS,
  };
}
