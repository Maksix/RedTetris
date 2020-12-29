import { getMinMaxX } from 'components/pages/GamePage/Board/helpers/getMinMaxX';

const empty = null;
const filled = 'red';

describe('getMinMaxX', () => {
  const cases = [
    [[undefined, undefined], empty, 5, [undefined, undefined]],
    [[undefined, undefined], filled, 5, [5, 5]],
    [[undefined, undefined], filled, 0, [0, 0]],
    [[0, 0], empty, 5, [0, 0]],
    [[0, 0], filled, 5, [0, 5]],
    [[3, 100], filled, 5, [3, 100]],
    [[3, 100], filled, 2, [2, 100]],
    [[3, 100], filled, 101, [3, 101]],
    [[11, 11], filled, 12, [11, 12]],
  ];

  test.each(cases)('Изначально: %s, ячейка %s, индекс %s, должны получить %s',
    (initial, item, ind, result) => {
      expect(getMinMaxX(initial, item, ind)).toStrictEqual(result);
    });
});
