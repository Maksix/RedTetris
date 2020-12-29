import themeReducer from '../themeReducer';
import { SWITCH_THEME } from '../types';

describe('theme reducer', () => {
  test('should return the initial state', () => {
    expect(themeReducer(undefined, {})).toEqual({ theme: 'dark' });
  });

  test('should handle SWITCH_THEME', () => {
    expect(themeReducer(undefined, { type: SWITCH_THEME, payload: 'light' })).toEqual({ theme: 'light' });
  });
});
