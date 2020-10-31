/* eslint-disable */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('tetris'),
);
