import { UPDATE_PLAYER_LIST } from '../reducers/types';

export function updatePlayerList(playerList) {
  return {
    type: UPDATE_PLAYER_LIST,
    payload: playerList,
  };
}
