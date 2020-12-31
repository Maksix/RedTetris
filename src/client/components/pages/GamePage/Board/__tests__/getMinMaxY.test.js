import { getMinMaxY } from 'components/pages/GamePage/Board/helpers/getMinMaxY';

const empty = [null, null, null, null];
const filled = ['red', null, null, null];

describe('getMinMaxY', () => {
  const cases = [
    [[undefined, undefined], empty, 5, [5, 5]],
    [[undefined, undefined], filled, 5, [undefined, undefined]],
    [[undefined, undefined], filled, 0, [undefined, undefined]],
    [[0, 100], filled, 0, [0, 100]],
    [[0, 100], filled, 100, [0, 100]],
    [[0, 5], filled, 100, [0, 5]],
    [[0, 0], filled, 100, [0, 0]],
    [[0, 100], empty, 0, [0, 100]],
    [[0, 100], empty, 100, [0, 100]],
    [[0, 5], empty, 100, [0, 100]],
    [[0, 0], empty, 100, [0, 100]],
  ];

  test.each(cases)('Изначально: %s, ячейка %s, индекс %s, должны получить %s',
    (initial, item, ind, result) => {
      expect(getMinMaxY(initial, item, ind)).toStrictEqual(result);
    });
});
