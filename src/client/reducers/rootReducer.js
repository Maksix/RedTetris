import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import usernameReducer from './usernameReducer';
import playerListReducer from './playerListReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  username: usernameReducer,
  playerList: playerListReducer,
});

export default rootReducer;
