export const getMinMaxY = ([min, max], item, ind) => {
  if (item.every((cell) => !cell)) {
    const newMin = min === undefined ? ind : min;
    const newMax = !max || ind > max ? ind : max;

    return [newMin, newMax];
  }
  return [min, max];
};
