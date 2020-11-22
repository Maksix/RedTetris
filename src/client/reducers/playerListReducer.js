import { UPDATE_PLAYER_LIST } from './types';

const initialState = { playerList: [] };

const playerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_LIST:
      return { ...state, playerList: action.payload };
    default: return state;
  }
};

export default playerListReducer;
