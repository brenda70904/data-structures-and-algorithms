"use strict";

const { Stack } = require('./index.js');

class Node {
  constructor(value, next) {
    this.value = value,
      this.next = null
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.stack1.isEmpty) {
      while (!stack1.isEmpty) {
        let temp = this.top;
        temp = stack1.pop();
        stack2.push(temp);
        this.top = this.top.next;
        temp = this.top;
      }
      this.stack1.push(newNode);

      while (!this.stack2.isEmpty) {
        this.top = stack2.pop();
        stack1.push(this.top);
        this.top = this.top.next;
      }
    } else {
      this.stack1.push(newNode);
    };
  }

  dequeue() {
    if (!this.stack1.isEmpty) {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp;
    } else return null;
  }
}

module.exports = PseudoQueue;