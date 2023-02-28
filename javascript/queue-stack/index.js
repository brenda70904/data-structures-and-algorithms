"use strict";

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  };
};

class Stack {
  constructor() {
    this.top = null;
  }


  // push in the value
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  };

  pop() {
    let removedValue = this.top ? this.top.value : this.top;
    if (this.top) {
      this.top = this.top.next;
    };
    return removedValue;
  };

  peek() {
    if (this.top) {
      return this.top.value;
    }
    return null;
  }

  isEmpty() {
    return !this.top;
  };
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  };

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      if (this.front === this.back) {
        this.back = null;
      };
      this.front = this.front.next;
    };
    return removedValue;
  };

  peek() {
    if (this.front) {
      return this.front;
    }
    return null;
  }

  isEmpty() {
    return this.front === null && this.back === null;
  }
}





module.exports = { Stack, Queue };
