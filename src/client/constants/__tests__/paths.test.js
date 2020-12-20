import { paths } from '../paths';

describe('paths', () => {
  test('should return constant for main paths', () => {
    expect(paths).toEqual({
      mainScreen: '/',
      game: '/:room([A-Z0-9]{5})[:name([A-Za-z0-9]{4,12})]',
    });
  });
});
