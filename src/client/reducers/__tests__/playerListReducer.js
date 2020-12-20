import playerListReducer from '../playerListReducer';
import { UPDATE_PLAYER_LIST } from '../types';

describe('player list reducer', () => {
  test('should return the initial state', () => {
    expect(playerListReducer(undefined, {})).toEqual({ playerList: [] });
  });

  test('should handle UPDATE_PLAYER_LIST', () => {
    expect(playerListReducer(undefined, { type: UPDATE_PLAYER_LIST, payload: [{ id: 1, name: 'test', order: 1 }] })).toEqual(
      { playerList: [{ id: 1, name: 'test', order: 1 }] },
    );
  });
});
