import { BLOCK_ROW, START_GAME } from './types';

const initialState = { game: { status: 'paused', blockedRows: 0, options: { speed: 5 } } };

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, game: { status: 'started', blockedRows: 0, options: action.payload } };
    case BLOCK_ROW:
      return { ...state, game: { ...state.game, blockedRows: state.game.blockedRows + 1 } };
    default: return state;
  }
};

export default gameReducer;
