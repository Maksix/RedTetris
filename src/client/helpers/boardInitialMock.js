import { getFilledArray } from 'helpers/getFilledArray';

const rows = getFilledArray(20);
const row = getFilledArray(10).map(() => null);
const boardInitialMock = rows.fill(row);

const test19 = [
  'yellow',
  'dark_yellow',
  'yellow',
  'dark_yellow',
  'red',
  'dark_red',
  null,
  null,
  null,
  null,
];

const test18 = [
  null,
  null,
  null,
  null,
  'dark_red',
  'red',
  null,
  null,
  null,
  null,
];
boardInitialMock[19] = test19;
boardInitialMock[18] = test18;

export { boardInitialMock };
