const matrix = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [0, 1, 9, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 9]
];

const myMatrix = new Matrix(matrix);

myMatrix.findPath([0, 0], [3, 5]);
