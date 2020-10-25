import React from 'react';
import ReactDOM from 'react-dom';
import './services/i18n'
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('tetris')
);
