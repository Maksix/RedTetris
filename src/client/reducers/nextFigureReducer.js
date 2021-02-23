import { SET_FIGURE } from './types';

const initialState = { figure: [] };

const nextFigureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIGURE:
      return { ...state, figure: action.payload };
    default: return state;
  }
};

export default nextFigureReducer;
