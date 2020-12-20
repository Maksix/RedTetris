import { updateRole } from '../updateRoleAction';
import { UPDATE_ROLE } from '../../reducers/types';

describe('role actions', () => {
  test('should create an action to update role', () => {
    const role = 'leader';
    const expectedAction = {
      type: UPDATE_ROLE,
      payload: role,
    };
    expect(updateRole(role)).toEqual(expectedAction);
  });
});
