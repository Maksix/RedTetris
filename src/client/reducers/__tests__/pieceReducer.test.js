import pieceReducer from '../pieceReducer';
import { GET_PIECES } from '../types';

describe('piece reducer', () => {
  test('should return the initial state', () => {
    expect(pieceReducer(undefined, {})).toEqual({ pieces: [] });
  });

  test('should handle GET_PIECES', () => {
    expect(pieceReducer(undefined, { type: GET_PIECES, payload: ['blue', 'red', 'black'] })).toEqual(
      { pieces: ['blue', 'red', 'black'] },
    );
  });
});
