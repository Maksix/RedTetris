import { START_GAME } from '../reducers/types';

export function startGame(options) {
  return {
    type: START_GAME,
    payload: options,
  };
}
