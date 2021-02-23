import { combineReducers } from 'redux';
import nextFigureReducer from 'reducers/nextFigureReducer';
import themeReducer from './themeReducer';
import usernameReducer from './usernameReducer';
import playerListReducer from './playerListReducer';
import roomReducer from './roomReducer';
import roleReducer from './roleReducer';
import gameReducer from './gameReducer';
import pieceReducer from './pieceReducer';
import leaderboardReducer from './leaderboardReducer';

const rootReducer = combineReducers({
  role: roleReducer,
  room: roomReducer,
  theme: themeReducer,
  username: usernameReducer,
  playerList: playerListReducer,
  game: gameReducer,
  pieces: pieceReducer,
  leaderboard: leaderboardReducer,
  figure: nextFigureReducer,
});

export default rootReducer;
