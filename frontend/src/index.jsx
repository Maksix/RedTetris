import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App className="app" />
  </BrowserRouter>,
  document.getElementById('root'),
);
