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
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
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
console.log(list.contains(50));
console.log(list.contains(51));
list.display();
