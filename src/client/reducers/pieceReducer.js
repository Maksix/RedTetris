import { GET_PIECES } from './types';

const initialState = { pieces: [] };

const pieceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIECES:
      return { ...state, pieces: [...state.pieces, ...action.payload] };
    default: return state;
  }
};

export default pieceReducer;
