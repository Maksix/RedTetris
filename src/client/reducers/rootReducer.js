import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import usernameReducer from './usernameReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  username: usernameReducer,
});

export default rootReducer;
