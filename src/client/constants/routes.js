import React from 'react';
import { paths } from './paths';

const MainScreenPage = React.lazy(() => import(/* webpackChunkName: 'MainScreenPage' */ 'components/pages/MainScreenPage'));
const GamePage = React.lazy(() => import(/* webpackChunkName: 'MainScreenPage' */ 'components/pages/GamePage/GamePage.jsx'));

const Routes = [
  {
    path: paths.mainScreen,
    exact: true,
    Component: MainScreenPage,
  },
  {
    path: paths.game,
    exact: false,
    Component: GamePage,
  },
];

export { Routes };
