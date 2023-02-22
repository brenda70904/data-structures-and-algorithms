'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

//------------lab 05 testing ---------------
describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it("can successfully instantiate an empty linked list", ()=>{
    const linked = new LinkedList();
    expect(linked.head).toBeNull();
  });

  it("should insert at beginning of empty", ()=>{
    const linked = new LinkedList();
    linked.insert("apple");

    expect(linked.head.value).toEqual("apple");
    expect(linked.head.next).toBeNull();
  });

  it("should able to insert multiple node into the linked list", ()=>{
    const linked = new LinkedList();
    linked.insert("apple");
    linked.insert("banana");

    expect(linked.head.value).toEqual("banana");
    expect(linked.head.next.value).toEqual("apple");
    expect(linked.head.next.next).toBeNull();
  })


  it("can properly return a collection of all the values that exist in the linked list",()=>{
    const linked = new LinkedList();
    linked.insert("apple");
    linked.insert("banana");

    const linkedString = linked.toString();
    expect(linked.head.value).toEqual("banana");
    expect(linked.head.next.value).toEqual("apple");
    expect(linked.head.next.next).toBeNull();
  });


  //included testing
  it("Will return true when finding a value within the linked list that exists ", ()=>{
    const linked = new LinkedList();
    linked.insert("1");
    linked.insert("2");
    linked.insert("3");

    const nodeIncluded = linked.includes("3");
    expect(nodeIncluded).toBeTruthy();
  });

  it("Will return false when finding a value within the linked list that exists ", ()=>{
    const linked = new LinkedList();
    linked.insert("1");
    linked.insert("2");
    linked.insert("3");

    const nodeIncluded = linked.includes("5");
    expect(nodeIncluded).toBeFalsy();
  });

  // ------------lab 06 testing ---------------
  

  // ------------lab 07 testing ---------------

  test('return the value of kth', ()=> {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);
    linked.insert(3);
    linked.kthFromTheEnd(2);

    expect(linked.head.value).toEqual(3);
  });
  test('Where k is greater than the length of the linked list', ()=> {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);
    linked.insert(3);
    linked.insert(4);
    linked.kthFromTheEnd(16);

    expect(linked.head.value).toEqual("exception");
  });





});
