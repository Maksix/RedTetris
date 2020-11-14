import { GET_TETRAMINOS } from './types';

const initialState = { tetraminos: false };

const tetraminosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TETRAMINOS:
      return { ...state, tetraminos: action.payload };
    default: return state;
  }
};

export default tetraminosReducer;
