import { SET_USERNAME } from '../reducers/types';

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username,
  };
}
