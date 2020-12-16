import { UPDATE_ROLE } from './types';

const initialState = { role: 'player' };

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROLE:
      return { ...state, role: action.payload };
    default: return state;
  }
};

export default roleReducer;
