import {
  ADD_SCORE, BLOCK_ROW, START_GAME, FINISH_GAME, RESET_GAME,
} from './types';

const initialState = {
  game: {
    status: 'paused', blockedRows: 0, options: { speed: 5 }, score: 0,
  },
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        game: {
          status: 'started', blockedRows: 0, score: 0, options: action.payload,
        },
      };
    case BLOCK_ROW:
      return { ...state, game: { ...state.game, blockedRows: state.game.blockedRows + 1 } };
    case ADD_SCORE:
      return { ...state, game: { ...state.game, score: state.game.score + action.payload } };
    case FINISH_GAME:
      return { ...state, game: { ...state.game, status: 'finished' } };
    case RESET_GAME:
      return { ...state, game: { ...state.game, status: 'paused' } };
    default: return state;
  }
};

export default gameReducer;
