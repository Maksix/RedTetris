import { UPDATE_ROLE } from '../reducers/types';

export function updateRole(role) {
  return {
    type: UPDATE_ROLE,
    payload: role,
  };
}
