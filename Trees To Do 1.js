class BTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  add(val) {
    var head = this.root;
    while (head) {
      if (val > head.value) {
        if (head.right) {
          head = head.right;
        } else {
          head.right = new BTNode(val);
          return this;
        }
      } else {
        if (head.left) {
          head = head.left;
        } else {
          head.left = new BTNode(val);
          return this;
        }
      }
    }
    this.root = new BTNode(val);
    return this;
  }
  contains(value) {
    var current = this.root;
    while (current) {
      if (value == current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  min() {
    var current = this.root;
    var min = this.root.value;
    while (current.left) {
      if (current.left.value < min) {
        min = current.left.value;
      }
      current = current.left;
    }
    return min;
  }
  max() {
    var current = this.root;
    var max = this.root.value;
    while (current.right) {
      if (current.right.value > max) {
        max = current.right.value;
      }
      current = current.right;
    }
    return max;
  }
  size(currentNode) {
    if (!currentNode) {
      return 0;
    }
    var leftSide = this.size(currentNode.left);
    var rightSide = this.size(currentNode.right);
    return 1 + leftSide + rightSide;
  }

  isEmpty() {
    if (this.root) {
      return "this tree is not empty";
    }
    return " this tree is empty";
  }
}

tree = new BST();
tree.add(0);
tree.add(2);
tree.add(4);
tree.add(6);
tree.add(8);
tree.add(15);
console.log(tree.contains(6));
console.log(tree.contains(7));
console.log(tree.contains(8));
console.log(tree.contains(15));
console.log(tree.min());
console.log(tree.max());
console.log(tree.size(tree.root));
console.log(tree.isEmpty());
