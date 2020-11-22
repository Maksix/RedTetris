import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import usernameReducer from './usernameReducer';
import playerListReducer from './playerListReducer';
import roomReducer from './roomReducer';

const rootReducer = combineReducers({
  room: roomReducer,
  theme: themeReducer,
  username: usernameReducer,
  playerList: playerListReducer,
});

export default rootReducer;
