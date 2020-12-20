import { getPieces, getNewPieces } from '../pieceActions';
import { GET_PIECES, OUT_GET_PIECES } from '../../reducers/types';

describe('piece actions', () => {
  test('should create an action to get pieces', () => {
    const pieces = ['red', 'black', 'blue'];
    const expectedAction = {
      type: GET_PIECES,
      payload: pieces,
    };
    expect(getPieces(pieces)).toEqual(expectedAction);
  });

  test('should create an action to request pieces', () => {
    const roomName = 'Room1';
    const expectedAction = {
      type: OUT_GET_PIECES,
      payload: { roomName },
    };
    expect(getNewPieces(roomName)).toEqual(expectedAction);
  });
});
