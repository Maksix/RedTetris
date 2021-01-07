import { GET_LEADERBOARD } from './types';

const initialState = { leaderboard: [] };

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADERBOARD:
      return { ...state, leaderboard: action.payload };
    default: return state;
  }
};

export default leaderboardReducer;
