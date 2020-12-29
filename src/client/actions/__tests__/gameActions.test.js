import {
  handleStartGame, startGame, changeMap, blockRow, handleBlockRow, addScore,
} from '../gameActions';
import {
  START_GAME,
  OUT_START_GAME,
  BLOCK_ROW,
  OUT_BLOCK_ROW, OUT_CHANGE_MAP, ADD_SCORE,
} from '../../reducers/types';

describe('game actions', () => {
  test('should create an action to send start game', () => {
    const roomName = 'Room1';
    const options = { speed: 5 };
    const expectedAction = {
      type: OUT_START_GAME,
      payload: { roomName, options },
    };
    expect(handleStartGame(options, roomName)).toEqual(expectedAction);
  });

  test('should create an action to get start game options', () => {
    const options = { speed: 5 };
    const expectedAction = {
      type: START_GAME,
      payload: options,
    };
    expect(startGame(options)).toEqual(expectedAction);
  });

  test('should create an action to send block row', () => {
    const roomName = 'Room1';
    const expectedAction = {
      type: OUT_BLOCK_ROW,
      payload: roomName,
    };
    expect(handleBlockRow(roomName)).toEqual(expectedAction);
  });

  test('should create an action to get block row', () => {
    const expectedAction = {
      type: BLOCK_ROW,
    };
    expect(blockRow()).toEqual(expectedAction);
  });

  test('should create an action to add score', () => {
    const expectedAction = {
      type: ADD_SCORE,
      payload: 100,
    };
    expect(addScore(100)).toEqual(expectedAction);
  });

  test('should create an action to get block row', () => {
    const roomName = 'Room1';
    const map = [['red', 'black', 'blue']];
    const expectedAction = {
      type: OUT_CHANGE_MAP,
      payload: { roomName, map },
    };
    expect(changeMap(roomName, map)).toEqual(expectedAction);
  });
});
