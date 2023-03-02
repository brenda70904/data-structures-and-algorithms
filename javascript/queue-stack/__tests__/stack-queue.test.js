'use strict';

const { Stack, Queue } = require('../');
const PseudoQueue = require('../pseudoQueue.js');
const AnimalShelter = require('../stack-queue-animal-shelter');
const bracket = require('../stack-queue-brackets');

// --------------------stack test--------------------//
describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
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
    expect(poppedValue).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);

  });

  it('it can peek the top one', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });

  it('is empty', () => {
    let stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();
  });

  it('is not empty', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.isEmpty()).toBeFalsy();
  });
});

// --------------------Queue test--------------------//
describe('Queue', () => {
  it('can successfully enqueue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);
  });

  it('can successfully dequeue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue(1);
    queue.dequeue(2);

    expect(queue.front.value).toEqual(3);
    expect(queue.back.value).toEqual(3);
  });

  it('can successfully peek the front value', () => {
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

  it('is empty', () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  it('is not empty', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.isEmpty()).toBeFalsy();
  });
});

// --------------------pseudoQueue test--------------------//
describe('pseudoQueue', () => {
  it('can successfully add node to stack when stack is empty', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(20);

    expect(pseudoQueue.stack1.top.value).toEqual(20);
  });

  it('can successfully add node to stack', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(100);
    pseudoQueue.enqueue(200);
    pseudoQueue.enqueue(300);

    expect(pseudoQueue.dequeue()).toEqual(100);
  });
  it('empty queue', () => {
    let pseudoQueue = new PseudoQueue();
    expect(pseudoQueue.dequeue()).toBeNull();
  });
  it('empty queue after extracting all data', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(100);
    pseudoQueue.enqueue(200);
    pseudoQueue.enqueue(300);
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.dequeue()).toBeNull();
  });

});

// --------------------animalShelter test--------------------//

const dogObj = { species: 'dog', name: 'dogName' };
const catObj = { species: 'cat', name: 'catName' };
let animalShelter = new AnimalShelter();

describe('AnimalShelter', () => {

  it('can enqueue based on species', () => {

    animalShelter.enqueue(dogObj);
    animalShelter.enqueue(dogObj);

    expect(animalShelter.dogQ.isEmpty()).toBeFalsy();
    expect(animalShelter.catQ.isEmpty()).toBeTruthy();
  });

  it('can dequeue based on species', () => {

    animalShelter.enqueue(dogObj);
    animalShelter.enqueue(dogObj);
    animalShelter.enqueue(dogObj);

    animalShelter.enqueue(catObj);
    animalShelter.enqueue(catObj);
    animalShelter.enqueue(catObj);

    expect(animalShelter.dequeue('dog')).toBe(dogObj);
    expect(animalShelter.dequeue('cat')).toBe(catObj);
    expect(animalShelter.dequeue('bird')).toBeNull();
  });
});
// --------------------bracket test--------------------//

describe('bracket',()=>{
  it('return true with input:',()=>{
    expect(bracket('{}')).toBeTruthy();
    expect(bracket('{}(){}')).toBeTruthy();
    expect(bracket('{[()]}')).toBeTruthy();
    expect(bracket('(){}[[]]')).toBeTruthy();
    expect(bracket('{}{Code}[Fellows](())')).toBeTruthy();
    expect(bracket('()[[Extra Characters]]')).toBeTruthy();
  });

  it('return false wtih input:',()=>{
    expect(bracket('[({}]')).toBeFalsy();
    expect(bracket('(](')).toBeFalsy();
    expect(bracket('{(})')).toBeFalsy();
    expect(bracket('()[{]}')).toBeFalsy();
    expect(bracket('(((((((')).toBeFalsy();
  });

  test('return null if no string',()=>{
    expect(bracket('')).toBeFalsy();
  });
});
