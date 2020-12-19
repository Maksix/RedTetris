import gameReducer from '../gameReducer';
import { BLOCK_ROW, START_GAME } from '../types';

describe('game reducer', () => {
  test('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(
      { game: { status: 'paused', blockedRows: 0, options: { speed: 5 } } },
    );
  });

  test('should handle START_GAME', () => {
    expect(gameReducer(undefined, { type: START_GAME, payload: { speed: 10 } })).toEqual(
      { game: { status: 'started', blockedRows: 0, options: { speed: 10 } } },
    );
  });

  test('should handle BLOCK_ROW', () => {
    expect(gameReducer(undefined, { type: BLOCK_ROW })).toEqual(
      { game: { status: 'paused', blockedRows: 1, options: { speed: 5 } } },
    );
  });
});
