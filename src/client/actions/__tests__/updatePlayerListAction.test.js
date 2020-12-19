import { updatePlayerList } from '../updatePlayerListAction';
import { UPDATE_PLAYER_LIST } from '../../reducers/types';

describe('update player list actions', () => {
  test('should create an action to update player list', () => {
    const playerList = [{ id: 1, role: 'leader', order: 1 }];
    const expectedAction = {
      type: UPDATE_PLAYER_LIST,
      payload: playerList,
    };
    expect(updatePlayerList(playerList)).toEqual(expectedAction);
  });
});
