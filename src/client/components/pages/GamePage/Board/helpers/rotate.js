export const rotate = (matrix) => (
  matrix[0].map((val, index) => matrix.map((row) => row[index]).reverse())
);
