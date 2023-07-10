class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFront(val) {
    let new_node = new Node(val);

    if (!this.head) {
      this.head = new_node;
      return this.head;
    }
    new_node.next = this.head;
    this.head = new_node;
    return this.head;
  }
  display() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + ",";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
  max() {
    let current = this.head;
    let max = current.data;
    while (current !== null) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return max;
  }
  min() {
    let current = this.head;
    let min = current.data;
    while (current !== null) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }
  average() {
    let current = this.head;
    let sum = 0;
    let length = 0;
    while (current !== null) {
      sum += current.data;
      length++;
      current = current.next;
    }
    return sum / length;
  }
}
var list = new LinkedList();
list.addFront(30);
list.addFront(50);
list.addFront(70);
list.addFront(90);
console.log(list.max());
console.log(list.min());
console.log(list.average());
list.display();
