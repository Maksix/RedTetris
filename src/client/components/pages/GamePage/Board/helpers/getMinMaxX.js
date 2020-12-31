export const getMinMaxX = ([min, max], item, ind) => {
  const newMin = item && (min === undefined || min > ind) ? ind : min;
  const newMax = item && (max === undefined || max < ind) ? ind : max;

  return [newMin, newMax];
};
