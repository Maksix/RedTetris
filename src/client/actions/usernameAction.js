import { SET_USERNAME } from '../reducers/types';

// eslint-disable-next-line import/prefer-default-export
export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username,
  };
}
