import React from 'react';
import { paths } from './paths';

const MainScreenPage = React.lazy(() => import(/* webpackChunkName: 'MainScreenPage' */ 'components/pages/MainScreenPage'));
const GamePage = React.lazy(() => import(/* webpackChunkName: 'MainScreenPage' */ 'components/pages/GamePage'));

const Routes = [
  {
    path: paths.mainScreen,
    exact: true,
    Component: MainScreenPage,
  },
  {
    path: paths.game,
    Component: GamePage,
  },
];

export { Routes };
