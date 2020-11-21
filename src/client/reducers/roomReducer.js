import { JOIN_ROOM_ERROR } from './types';

const initialState = { roomError: false };

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_ROOM_ERROR:
      return { ...state, roomError: action.payload };
    default: return state;
  }
};

export default roomReducer;
