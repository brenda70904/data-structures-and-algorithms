'use strict';

const { Node, Tree, BST, preOrderSum } = require('../');

describe('tree', () => {
  let tree = new Tree();
  tree.root = new Node(10);
  tree.root.left = new Node(11);
  tree.root.right = new Node(12);
  tree.root.left.left = new Node(13);
  tree.root.left.right = new Node(14);
  tree.root.right.left = new Node(15);
  tree.root.right.right = new Node(16);

  it('can create tree as expected ', () => {

    expect(tree.root.left.value).toEqual(11);
    expect(tree.root.left.left.value).toEqual(13);
  });

  it('can return pre-order as expected', () => {
    let result = tree.preOrder();
    expect(result).toEqual([10, 11, 13, 14, 12, 15, 16]);
  });

  it('can return in-order as expected', () => {
    let result = tree.inOrder();
    expect(result).toEqual([13, 11, 14, 10, 15, 12, 16]);
  });

  it('can return post-order as expected', () => {
    let result = tree.postOrder();
    expect(result).toEqual([13, 14, 11, 15, 16, 12, 10]);
  });

  it("test: sum ", ()=>{
    let result = preOrderSum(tree);

    expect(result).toEqual(91);
  })
});

//-----------------------Binary Search Tree-------------------//
describe('Binary Search Tree', () => {
  let bst = new BST();
  bst.add(6);
  bst.add(5);
  bst.add(88);
  bst.add(34);
  bst.add(3)
  bst.add(14);
  bst.add(43);
  bst.add(22);
  bst.add(2);

  it('new BST root value', () => {
    expect(bst.root.value).toEqual(6);
  });
  it('can add new node with that value in that correct location in the BST', () => {
    expect(bst.root.left.value).toEqual(5);
    expect(bst.root.right.value).toEqual(88);
    expect(bst.root.left.left.value).toEqual(3);
    expect(bst.root.right.left.value).toEqual(34);
    expect(bst.root.right.left.right.value).toEqual(43);
    expect(bst.root.right.left.left.right.value).toEqual(22);
  });

  it('can return true when bst contain the value',()=>{
    expect(bst.contains(5)).toBeTruthy();
  });
  it('can return false when bst contain the value',()=>{
    expect(bst.contains(77)).toBeFalsy();
  });
});

describe('tree Max',()=>{
  let tree = new Tree();
  tree.root = new Node(8);
  tree.root.left = new Node(11);
  tree.root.right = new Node(2);
  tree.root.left.left = new Node(13);
  tree.root.left.right = new Node(1);
  tree.root.right.left = new Node(15);
  tree.root.right.right = new Node(6);
  
  it('return max value from tree',()=>{
    expect(tree.treeMax()).toEqual(15);
  });
})