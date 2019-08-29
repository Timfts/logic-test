const matrix = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [0, 1, 9, 1],
  [1, 1, 1, 1],
];

const myMatrix = new Matrix(matrix);

const path = myMatrix.findPath([0, 0], [2, 3]);

console.log(path);
