import { getFigureStartIndex } from 'components/pages/GamePage/Board/helpers/getFigureStartIndex';

import { figures } from 'helpers/figures';

describe('getFigureStartIndex', () => {
  const cases = [
    ['буква Г', figures[0], 4],
    ['палка', figures[1], 2],
    ['квадрат', figures[2], 4],
    ['перевернутая буква Г?', figures[3], 4],
    ['обратная буква Z', figures[4], 3],
    ['буква Z', figures[5], 3],
    ['буква Т', figures[6], 3],
  ];

  test.each(cases)('Фигура: %s %o, результат: %p',
    (_, figure, result) => {
      expect(getFigureStartIndex(figure)).toStrictEqual(result);
    });
});
