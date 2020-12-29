import { setUsername } from '../usernameAction';
import { SET_USERNAME } from '../../reducers/types';

describe('username actions', () => {
  test('should create an action to set username', () => {
    const username = 'Username';
    const expectedAction = {
      type: SET_USERNAME,
      payload: username,
    };
    expect(setUsername(username)).toEqual(expectedAction);
  });
});
