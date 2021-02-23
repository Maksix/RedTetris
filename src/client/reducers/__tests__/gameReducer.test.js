import gameReducer from '../gameReducer';
import {
  ADD_SCORE, BLOCK_ROW, FINISH_GAME, START_GAME,
} from '../types';

describe('game reducer', () => {
  test('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(
      {
        game: {
          status: 'paused', blockedRows: 0, score: 0, options: { speed: 5 },
        },
      },
    );
  });

  test('should handle START_GAME', () => {
    expect(gameReducer(undefined, { type: START_GAME, payload: { speed: 10 } })).toEqual(
      {
        game: {
          status: 'started', blockedRows: 0, score: 0, options: { speed: 10 },
        },
      },
    );
  });

  test('should handle FINISH_GAME', () => {
    expect(gameReducer(undefined, { type: FINISH_GAME })).toEqual(
      {
        game: {
          status: 'finished', blockedRows: 0, score: 0, options: { speed: 5 },
        },
      },
    );
  });

  test('should handle BLOCK_ROW', () => {
    expect(gameReducer(undefined, { type: BLOCK_ROW })).toEqual(
      {
        game: {
          status: 'paused', score: 0, blockedRows: 1, options: { speed: 5 },
        },
      },
    );
  });

  test('should handle ADD_SCORE', () => {
    expect(gameReducer(undefined, { type: ADD_SCORE, payload: 100 })).toEqual(
      {
        game: {
          status: 'paused', score: 100, blockedRows: 0, options: { speed: 5 },
        },
      },
    );
  });
});
