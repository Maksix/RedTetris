import { getFilledArray } from 'helpers/getFilledArray';

const rows = getFilledArray(20);
const row = getFilledArray(10).map(() => ({
  color: 'grey',
}));
const boardInitialMock = rows.fill(row);

const test19 = [
  { color: 'yellow' },
  { color: 'dark_yellow' },
  { color: 'yellow' },
  { color: 'dark_yellow' },
  { color: 'red' },
  { color: 'dark_red' },
  { },
  { },
  { },
  { },
];
const test18 = [
  { },
  { },
  { },
  { },
  { color: 'dark_red' },
  { color: 'red' },
  { },
  { },
  { },
  { },
];
boardInitialMock[19] = test19;
boardInitialMock[18] = test18;

export { boardInitialMock };
