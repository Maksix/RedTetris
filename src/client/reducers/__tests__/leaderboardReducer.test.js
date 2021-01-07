import { GET_LEADERBOARD } from '../types';
import leaderboardReducer from '../leaderboardReducer';

describe('leaderboard reducer', () => {
  test('should return the initial state', () => {
    expect(leaderboardReducer(undefined, {})).toEqual({ leaderboard: [] });
  });

  test('should handle GET_LEADERBOARD', () => {
    expect(leaderboardReducer(undefined, { type: GET_LEADERBOARD, payload: ['test'] })).toEqual(
      { leaderboard: ['test'] },
    );
  });
});
