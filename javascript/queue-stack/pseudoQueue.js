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
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value)
  }

  dequeue() {
    while (!this.stack1.isEmpty()) {
      let temp = this.stack1.pop()
      this.stack2.push(temp);
    }
    let result = this.stack2.pop();
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    return result ? result : null
  }
}

module.exports = PseudoQueue;