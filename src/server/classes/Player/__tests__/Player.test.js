const Player = require('../Player');

describe('Player', () => {
  test('should get new instance', () => {
    const player = new Player('testName', 'qwerqwer');
    expect(player.role).toBe('player');
  });

  test('should update role', () => {
    const player = new Player('testName', 'qwerqwer');
    player.updateRole('leader');
    expect(player.role).toBe('leader');
  });

  test('should not update role if it is not included', () => {
    const player = new Player('testName', 'qwerqwer');
    player.updateRole('testRole');
    expect(player.role).toBe('player');
  });

  test('should update map', () => {
    const player = new Player('testName', 'qwerqwer');
    player.updateMap(['red', 'black']);
    expect(player.map[0]).toBe('red');
  });
});
