'use strict';

const { Queue } = require('../../queue-stack');

const TreeBreadthFirst = (tree) => {

  if (!tree.root) return [];

  let array = [];
  let queue = new Queue();
  queue.enqueue(tree.root);

  while (!queue.isEmpty()) {
    let frontValue = queue.dequeue();
    console.log(frontValue.value);
    array.push(frontValue.value);

    if (frontValue.left) {
      queue.enqueue(frontValue.left);
    }
    if (frontValue.right) {
      queue.enqueue(frontValue.right);
    }
  }
  return array;
}



module.exports = TreeBreadthFirst;
