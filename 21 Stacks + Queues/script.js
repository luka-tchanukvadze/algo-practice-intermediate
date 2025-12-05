// // let stack = [];
// // stack.push("google");
// // stack.push("instagram");
// // stack.pop();

// const { ReceiptPoundSterling } = require("lucide-react");

// // stack.unshift("Create a new file");
// // stack.shift();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }

//     return ++this.size;
//   }

//   pop() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }

//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// let stack = new Stack();

// stack.push("FIRST");
// stack.push("second");
// stack.push("FIRST");
// stack.push("FIRST");
