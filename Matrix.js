class Matrix {
  constructor(matrixArray) {
    this.baseMatrix = [...matrixArray];
    this.width = this.baseMatrix[0].length;
    this.height = this.baseMatrix.length;
    this.nodes = Matrix.mapMatrix(this.baseMatrix);
  }

  static checkVectorPostion(x, y, baseMatrix) {
    return baseMatrix[y] ? true : false;
    return baseMatrix[y][x] ? true : false;
  }

  static mapMatrix(matrix) {
    return matrix.map((row, y) =>
      row.map((value, x) => {
        return new Node(x, y, value);
      })
    );
  }

  getNode(x, y) {
    return Matrix.checkVectorPostion(x, y, this.nodes)
      ? this.nodes[y][x]
      : null;
  }

  getAllNodes() {
    return this.nodes;
  }

  availablePaths(currentStep, matrix) {
    const { node, history } = currentStep;

    console.log(node);
    console.log(matrix);
  }

  findPath([fromX, fromY], [toX, toY]) {
    if (
      !Matrix.checkVectorPostion(fromX, fromY, this.baseMatrix) ||
      !Matrix.checkVectorPostion(toX, toY, this.baseMatrix)
    ) {
      console.log("invalid value");
      return;
    }

    const initialPosition = new Step(this.getNode(fromX, fromY), []);
    const queue = [initialPosition];

    while (queue.length > 0) {
      let currentStep = queue.shift();
      let nextSteps = this.availablePaths(currentStep, this.nodes);
    }
  }
}
