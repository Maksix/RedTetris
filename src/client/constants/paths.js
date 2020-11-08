/* eslint-disable */

import { pathToRegexp } from 'path-to-regexp';

const keys = [
  {
    name: 'room', optional: false, repeat: false, pattern: '[A-Z0-9]{5}',
  },
  {
    name: 'name', optional: false, repeat: false, pattern: '[A-Za-z0-9]{4,12}',
  },
];
const gameRegExp = /\/#[A-Z0-9]{5}\[[A-Za-z0-9]{4,12}$/;
const regexpPath = pathToRegexp('/#:room[:name]', keys)
export const paths = {
  mainScreen: '/',
  game: "/:room([A-Z0-9]{5})[:name([A-Za-z0-9]{4,12})]",
};
