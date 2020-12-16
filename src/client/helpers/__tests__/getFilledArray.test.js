import { getFilledArray } from 'helpers/getFilledArray';

describe(
  'Заполненные массивы', () => {
    const cases = [
      [0, 0, []],
      [1, 1, [0]],
      [2, 2, [0, 1]],
      [10, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
      [null, 0, []],
      [undefined, 0, []],
    ];

    test.each(cases)('Массив из %s с длиной %s',
      (length, expectedLength, expectedArray) => {
        expect(getFilledArray(length)).toHaveLength(expectedLength);
        expect(getFilledArray(length)).toStrictEqual(expectedArray);
      });
  },
);
