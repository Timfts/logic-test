class Step {
    constructor(node, history){
        this.node = node;
        this.history = history
    }

    addEntry(node){
      this.history.push(node);
    }
}