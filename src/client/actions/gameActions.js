import {
  START_GAME,
  OUT_START_GAME,
  BLOCK_ROW,
  OUT_BLOCK_ROW, OUT_CHANGE_MAP, ADD_SCORE, FINISH_GAME, RESET_GAME,
} from 'reducers/types';

export function handleStartGame(options, roomName) {
  return {
    type: OUT_START_GAME,
    payload: { options, roomName },
  };
}

export function addScore(score) {
  return {
    type: ADD_SCORE,
    payload: score,
  };
}

export function endGame() {
  return {
    type: FINISH_GAME,
  };
}

export function startGame(options) {
  return {
    type: START_GAME,
    payload: options,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}

export function blockRow() {
  return {
    type: BLOCK_ROW,
  };
}

export function handleBlockRow(roomName) {
  return {
    type: OUT_BLOCK_ROW,
    payload: roomName,
  };
}

export function changeMap(roomName, map) {
  return {
    type: OUT_CHANGE_MAP,
    payload: { roomName, map },
  };
}
