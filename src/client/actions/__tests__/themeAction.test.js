import { switchTheme } from '../themeAction';
import { SWITCH_THEME } from '../../reducers/types';

describe('switch theme actions', () => {
  test('should create an action to switch theme', () => {
    const theme = 'light';
    const expectedAction = {
      type: SWITCH_THEME,
      payload: theme,
    };
    expect(switchTheme(theme)).toEqual(expectedAction);
  });
});
