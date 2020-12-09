import {
  START_GAME,
  OUT_START_GAME,
  BLOCK_ROW,
  OUT_BLOCK_ROW,
} from '../reducers/types';

export function handleStartGame(options, roomName) {
  return {
    type: OUT_START_GAME,
    payload: { options, roomName },
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

export function startGame(options) {
  return {
    type: START_GAME,
    payload: options,
  };
}
