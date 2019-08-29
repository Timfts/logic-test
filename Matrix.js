class Matrix {
  constructor(matrixArray) {
    this.baseMatrix = [...matrixArray];
    this.widthIndex = this.baseMatrix[0].length - 1;
    this.heightIndex = this.baseMatrix.length - 1;
    this.nodes = Matrix.mapMatrix(this.baseMatrix);
  }

  static checkVectorPostion(x, y, baseMatrix) {
    return baseMatrix[y] ? (baseMatrix[y][x] ? true : false) : false;
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

  nextSteps(currentStep, matrix) {
    const { node, history } = currentStep;
    const availableStepsArray = [];
    const checkOrder = ["top", "bottom", "left", "right"];
    const newHistory = [...history];
    newHistory.push(node);

    let movement;
    for (let item of checkOrder) {
      switch (item) {
        case "top":
          movement = this.getNode(node.x, node.y - 1);
          break;
        case "bottom":
          movement = this.getNode(node.x, node.y + 1);
          break;
        case "left":
          movement = this.getNode(node.x - 1, node.y);
          break;
        case "right":
          movement = this.getNode(node.x + 1, node.y);
          break;
        default:
          break;
      }

      //validate history
      if (movement) {
        if (
          (movement.value === 1 || movement.value === 9) &&
          !newHistory.includes(movement)
        ) {
          availableStepsArray.push(new Step(movement, newHistory));
        }
      }
    }

    return availableStepsArray;
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
    let queue = [initialPosition];

    while (queue.length) {
      let currentStep = queue.shift();
      if (currentStep.node.x === toX && currentStep.node.y === toY) {
        return(currentStep);
      }
      let nextSteps = this.nextSteps(currentStep, this.nodes);
      for (let step of nextSteps) {
        queue.push(step);
      }
    }
  }
}
