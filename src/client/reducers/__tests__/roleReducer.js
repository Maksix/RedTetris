import roleReducer from '../roleReducer';
import { UPDATE_ROLE } from '../types';

describe('role reducer', () => {
  test('should return the initial state', () => {
    expect(roleReducer(undefined, {})).toEqual({ role: 'player' });
  });

  test('should handle UPDATE_ROLE', () => {
    expect(roleReducer(undefined, { type: UPDATE_ROLE, payload: 'leader' })).toEqual({ role: 'leader' });
  });
});
