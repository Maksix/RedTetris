import { combineReducers, createStore } from 'redux';
import rootReducer from '../rootReducer';
import themeReducer from '../themeReducer';
import usernameReducer from '../usernameReducer';
import playerListReducer from '../playerListReducer';
import roomReducer from '../roomReducer';
import roleReducer from '../roleReducer';
import gameReducer from '../gameReducer';
import pieceReducer from '../pieceReducer';

describe('root reducer', () => {
  test('should return combined reducers', () => {
    const combinedReducers = combineReducers({
      role: roleReducer,
      room: roomReducer,
      theme: themeReducer,
      username: usernameReducer,
      playerList: playerListReducer,
      game: gameReducer,
      pieces: pieceReducer,
    });
    const store = createStore(rootReducer);
    const combinedStore = createStore(combinedReducers);
    expect(store.getState()).toEqual(combinedStore.getState());
  });
});
