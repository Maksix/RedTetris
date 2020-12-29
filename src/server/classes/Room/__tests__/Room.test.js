const Room = require('../Room');
const Player = require('../../Player/Player');

describe('Player', () => {
  test('should get new instance', () => {
    const player = new Player('testName', 'PlayerId');
    const room = new Room('roomName', player);
    expect(room.status).toBe('waiting');
  });

  test('should add player', () => {
    const player = new Player('testName', 'PlayerId');
    const room = new Room('roomName', player);
    const anotherPlayer = new Player('anotherTest', 'anotherPlayerId');
    room.addPlayer(anotherPlayer);
    expect(room.players).toStrictEqual([player, anotherPlayer]);
  });

  test('should find player by id', () => {
    const player = new Player('testName', 'PlayerId');
    const room = new Room('roomName', player);
    const foundPlayer = room.findPlayer('PlayerId');
    expect(foundPlayer).toStrictEqual(player);
  });

  test('can join to room with less than 4 players and cant with 4 and more', () => {
    const player1 = new Player('testName1', 'PlayerId1');
    const player2 = new Player('testName2', 'PlayerId2');
    const player3 = new Player('testName3', 'PlayerId3');
    const player4 = new Player('testName4', 'PlayerId4');
    const room = new Room('roomName', player1);
    room.addPlayer(player2);
    room.addPlayer(player3);
    expect(room.canJoin()).toBe(true);
    room.addPlayer(player4);
    expect(room.canJoin()).toBe(false);
  });

  test('should find player by id', () => {
    const player = new Player('testName', 'PlayerId', 'player');
    const room = new Room('roomName', player);
    expect(room.hasLeader()).toBe(undefined);
  });

  test('should remove player by id', () => {
    const player1 = new Player('testName1', 'PlayerId1', 'leader');
    const player2 = new Player('testName2', 'PlayerId2');
    const room = new Room('roomName', player1);
    room.addPlayer(player2);
    room.removePlayer('PlayerId1');
    expect(room.hasLeader()).toBe(player2);
    expect(room.players.length).toBe(1);
  });
});
