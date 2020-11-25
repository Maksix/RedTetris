import { START_GAME } from './types';

const initialState = { game: { status: 'paused', options: { speed: 5 } } };

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, game: { status: 'started', options: action.payload } };
    default: return state;
  }
};

export default gameReducer;
