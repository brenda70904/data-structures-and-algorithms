'use strict';

const TreeBreadthFirst = require('../tree-breadth-first/index');
const { Node, Tree } = require('../index');
describe('Tree - Breadth - First', () => {
  let tree = new Tree();
  tree.root = new Node(2);
  tree.root.left = new Node(8);
  tree.root.right = new Node(5);
  tree.root.left.left = new Node(6);
  tree.root.left.right = new Node(10);
  tree.root.right.left = new Node(4);

  it('return an array of all values in the tree, in the order they were encountered', () => {
    
    expect(TreeBreadthFirst(tree)).toEqual([2, 8, 5, 6, 10, 4]);
  });

});