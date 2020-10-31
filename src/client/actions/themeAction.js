import { SWITCH_THEME } from '../reducers/types';

// eslint-disable-next-line import/prefer-default-export
export function switchTheme(theme) {
  return {
    type: SWITCH_THEME,
    payload: theme,
  };
}
