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
  removeFront() {
    if (this.head === null) {
      return null;
    }
    this.head = this.head.next;
    return this.head;
  }

  printLinkedList() {
    if (this.head === null) {
      return null;
    }

    return this.head.data;
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
  length() {
    var length = 0;
    var current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
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
list.removeFront();
list.printLinkedList();
console.log(list.addFront(20));
console.log(list.removeFront());
console.log(list.printLinkedList());
console.log(list.contains(50));
console.log(list.length());
list.display();
