'use strict';

const {Queue} = require('../../queue-stack');

const TreeBreadthFirst = (tree) => {
  let queue = new Queue();
  let array = [];
  while(!queue.isEmpty){
    queue.enqueue(tree.root)
  }

};