const Piece = require('../Piece');

describe('Piece', () => {
  test('should get new instance', () => {
    const piece = new Piece(0, 0);
    expect(piece.figure).toStrictEqual([
      ['blue', 'dark_blue', null],
      ['dark_blue', null, null],
      ['blue', null, null]]);
  });

  test('should generate random figure', () => {
    const piece = new Piece(-1, 0);
    expect(Array.isArray(piece.figure)).toBe(true);
  });

  test('should rotate figure 1 times', () => {
    const piece = new Piece(4, 1);
    expect(piece.figure).toStrictEqual([
      [null, 'green', null],
      ['green', 'dark_green', null],
      ['dark_green', null, null],
    ]);
  });
});
