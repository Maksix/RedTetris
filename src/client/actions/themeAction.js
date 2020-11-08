import { SWITCH_THEME } from '../reducers/types';

export function switchTheme(theme) {
  return {
    type: SWITCH_THEME,
    payload: theme,
  };
}
