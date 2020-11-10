import React from 'react';
import './App.less';
import { Route, Switch } from 'react-router-dom';
import { Routes } from 'constants/routes';

function App() {
  return (
    <>
      <Switch>
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
