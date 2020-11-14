import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import rootReducer from './reducers/rootReducer';
import App from './containers/App';
import { socketMiddleware } from './middlewares/socketMiddleware';

const socket = io('localhost:8000');

const store = createStore(rootReducer, applyMiddleware(thunk, socketMiddleware(socket)));
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('tetris'),
);
