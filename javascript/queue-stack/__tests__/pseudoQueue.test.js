"use strict";

const PseudoQueue = require("../pseudoQueue.js");
// const { Stack } = require("../index");

describe("pseudoQueue", () => {
  it("can successfully add node to stack", () => {
    let pseudoQueue = new PseudoQueue();
    // let stack = new Stack();
    // stack.push(1);
    // stack.push(2);
    // stack.push(3);
    pseudoQueue.enqueue(20);

    expect(pseudoQueue.top.value).toEqual(20);
  });
})