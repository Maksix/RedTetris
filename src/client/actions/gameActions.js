import { START_GAME, OUT_START_GAME } from '../reducers/types';

export function handleStartGame(options, roomName) {
  return {
    type: OUT_START_GAME,
    payload: { options, roomName },
  };
}

export function startGame(options) {
  return {
    type: START_GAME,
    payload: options,
  };
}
