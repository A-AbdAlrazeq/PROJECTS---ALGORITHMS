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
}
var list = new LinkedList();
list.addFront(30);
list.addFront(50);
list.addFront(70);
list.display();
