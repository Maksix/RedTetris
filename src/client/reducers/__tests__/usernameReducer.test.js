import usernameReducer from '../usernameReducer';
import { SET_USERNAME } from '../types';

describe('username reducer', () => {
  test('should return the initial state', () => {
    expect(usernameReducer(undefined, {})).toEqual({ username: '' });
  });

  test('should handle SET_USERNAME', () => {
    expect(usernameReducer(undefined, { type: SET_USERNAME, payload: 'userName' })).toEqual({ username: 'userName' });
  });
});
