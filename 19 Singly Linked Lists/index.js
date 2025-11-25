// pice of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {}
}

// let first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("!");

// let list = new SinglyLinedList()
// list.push('hello')
