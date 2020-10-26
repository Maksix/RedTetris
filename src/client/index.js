import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './i18n'
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('tetris')
);
