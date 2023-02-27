'use strict';

const { Stack, Queue } = require('../');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1)
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop();
    expect(poppedValue).toEqual(3)
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);

  });

  it("it can peek the top one", () => {
    let stack = new Stack ();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });

});

describe("Queue", ()=>{
  it('can successfully enqueue', ()=>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);
  });

  it('can successfully dequeue', ()=>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue(1);
    queue.dequeue(2);
  
    expect(queue.front.value).toEqual(3);
    expect(queue.back.value).toEqual(3);
  });

  it('can successfully peek the front value', ()=>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(30);

    queue.dequeue(1);
    queue.dequeue(2);
  
    expect(queue.front.value).toEqual(3);
    expect(queue.back.value).toEqual(30);
  });
})

