import roomReducer from '../roomReducer';
import { JOIN_ROOM_ERROR } from '../types';

describe('room reducer', () => {
  test('should return the initial state', () => {
    expect(roomReducer(undefined, {})).toEqual({ roomError: false });
  });

  test('should handle JOIN_ROOM_ERROR', () => {
    expect(roomReducer(undefined, { type: JOIN_ROOM_ERROR, payload: 'The room is full' })).toEqual(
      { roomError: 'The room is full' },
    );
  });
});
