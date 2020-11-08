import React from 'react';
import './App.less';
import io from 'socket.io-client';
import { Route, Switch } from 'react-router-dom';
import { Routes } from 'constants/routes';
import GamePage from './pages/GamePage';

function App() {
  io('localhost:8000', {
    query: {
      message: 'hello',
    },
  });

  return (
    <>
      <Switch>
        <Route path="/#:room[:name]">
          <GamePage />
        </Route>
        {Routes.map(({
          path, Component, exact,
        }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => <Component {...props} />}
          />
        ))}
        <Route component={() => <div> not found</div>} />
      </Switch>
    </>
  );
}

export default App;
