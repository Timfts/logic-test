const matrix = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [0, 1, 9, 1],
  [1, 1, 1, 1]
];

const myMatrix = new Matrix(matrix);

myMatrix.findPath([0, 0], [2, 4]);
