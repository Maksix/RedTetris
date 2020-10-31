/* eslint-disable */

import { SWITCH_THEME } from "./types"

const initialState = {theme: 'dark'};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, theme: action.payload }
    default: return state;
  }
};

export default themeReducer;
