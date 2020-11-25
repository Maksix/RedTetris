import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import usernameReducer from './usernameReducer';
import playerListReducer from './playerListReducer';
import roomReducer from './roomReducer';
import roleReducer from './roleReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  role: roleReducer,
  room: roomReducer,
  theme: themeReducer,
  username: usernameReducer,
  playerList: playerListReducer,
  game: gameReducer,
});

export default rootReducer;
