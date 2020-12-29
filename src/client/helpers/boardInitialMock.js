import { getFilledArray } from 'helpers/getFilledArray';

const rows = getFilledArray(20);
const row = getFilledArray(10).map(() => null);
const boardInitialMock = rows.fill(row);

export { boardInitialMock };
