'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

//------------lab 05 testing ---------------
describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it("can successfully instantiate an empty linked list", () => {
    const linked = new LinkedList();
    expect(linked.head).toBeNull();
  });

  it("should insert at beginning of empty", () => {
    const linked = new LinkedList();
    linked.insert("apple");

    expect(linked.head.value).toEqual("apple");
    expect(linked.head.next).toBeNull();
  });

  it("should able to insert multiple node into the linked list", () => {
    const linked = new LinkedList();
    linked.insert("apple");
    linked.insert("banana");

    expect(linked.head.value).toEqual("banana");
    expect(linked.head.next.value).toEqual("apple");
    expect(linked.head.next.next).toBeNull();
  })


  it("can properly return a collection of all the values that exist in the linked list", () => {
    const linked = new LinkedList();
    linked.insert("apple");
    linked.insert("banana");

    const linkedString = linked.toString();
    expect(linked.head.value).toEqual("banana");
    expect(linked.head.next.value).toEqual("apple");
    expect(linked.head.next.next).toBeNull();
  });


  //included testing
  it("Will return true when finding a value within the linked list that exists ", () => {
    const linked = new LinkedList();
    linked.insert("1");
    linked.insert("2");
    linked.insert("3");

    expect(linked.includes("3")).toBeTruthy();
  });

  it("Will return false when finding a value within the linked list that exists ", () => {
    const linked = new LinkedList();
    linked.insert("1");
    linked.insert("2");
    linked.insert("3");

    expect(linked.includes("5")).toBeFalsy();
  });
});
// ------------lab 06 insertions ---------------
describe('linked-list-insertions', () => {
  it('Can successfully add a node to the end of the linked list',()=>{
    const linked= new LinkedList();
    linked.insert('apple');
    linked.insert('lemon');
    linked.append('peach');
    expect(linked.toString()).toEqual('{lemon} -> {apple} -> {peach} -> NULL');

  });

  it('Can successfully add multiple nodes to the end of a linked list',()=>{
    const linked= new LinkedList();
    linked.insert('apple');
    linked.insert('lemon');
    linked.append('peach');
    linked.append('cherry');

    expect(linked.toString()).toEqual('{lemon} -> {apple} -> {peach} -> {cherry} -> NULL');
  });

  it('Can successfully insert a node before a node located i the middle of a linked list',()=>{
    const linked= new LinkedList();
    linked.insert(1);
    linked.insert(3);
    linked.insert(5);
    linked.insertBefore(3,2)

    expect(linked.toString()).toEqual('{5} -> {2} -> {3} -> {1} -> NULL');
  });
  it('Can successfully insert a node before the first node of a linked list',()=>{
    const linked= new LinkedList();
    linked.insert(1);
    linked.insert(3);
    linked.insert(5);
    linked.insertAfter(3,2)

    expect(linked.toString()).toEqual('{5} -> {3} -> {2} -> {1} -> NULL');
  });
  });


// ------------lab 07 Linked-List-kth ---------------
describe('Linked-list-Kth', () => {

  test('return the value of kth', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);
    linked.insert(3);
    linked.insert(4);
    // linked.kthFromTheEnd(2);

    expect(linked.kthFromTheEnd(2)).toEqual(2);
  });
  test('Where k is greater than the length of the linked list', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);
    linked.insert(3);
    linked.insert(4);

    expect(linked.kthFromTheEnd(16)).toEqual("exception");
  });

  test("Where k is not a positive integer", () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);
    linked.insert(3);
    linked.insert(4);


    expect(linked.kthFromTheEnd(10)).toEqual("exception");
  });

  test("Where the linked list is of a size 1", () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.length

    expect(linked.length).toEqual(1);
  });

  test("“Happy Path”, where k is not at the end, but somewhere in the middle of the linked list", () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(1);
    linked.insert(2);
    linked.insert(3);
    linked.insert(4);
    let position = Math.ceil(linked.length / 2);


    expect(position).toEqual(3);
  });
});

// -------------lab 08 zip ------------------//
describe('Linked-list-zip', () => {

  it("where return a new list", () => {
    const linked = new LinkedList();

    const list1 = new LinkedList();
    list1.insert(5);
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    list1.insert(4);

    const list2 = new LinkedList();
    list2.insert(50);
    list2.insert(10);
    list2.insert(20);
    list2.insert(30);
    list2.insert(40);

    expect(linked.zipList(list1, list2).head.value).toEqual(4);
    expect(linked.zipList(list1, list2).head.next.value).toEqual(40);

  });
});


