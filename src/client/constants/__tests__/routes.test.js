import { Routes } from '../routes';
import { paths } from '../paths';

describe('routes', () => {
  test('should return constant for main routes', () => {
    Routes[0].Component = 'MainScreenPage';
    Routes[1].Component = 'GamePage';
    expect([...Routes]).toEqual([{
      path: paths.mainScreen,
      exact: true,
      Component: 'MainScreenPage',
    },
    {
      path: paths.game,
      exact: false,
      Component: 'GamePage',
    }]);
  });
});
