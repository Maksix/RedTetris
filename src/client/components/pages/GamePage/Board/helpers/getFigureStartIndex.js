import { getMinMaxX } from 'components/pages/GamePage/Board/helpers/getMinMaxX';

export const getFigureStartIndex = (figure) => {
  const [minXStart, maxXStart] = figure.reduce(([min, max], row) => {
    const newMinMax = row.reduce(getMinMaxX, [min, max]);
    return getMinMaxX(newMinMax);
  }, [undefined, undefined]);
  const figureWidthStart = maxXStart - minXStart + 1;
  return Math.floor(10 / 2 - Math.ceil(figureWidthStart / 2) - minXStart);
};
