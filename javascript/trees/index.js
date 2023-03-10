'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const result = [];

    const traverse = (node) => {
      // root
      result.push(node.value);
      // left node
      if (node.left) {
        traverse(node.left);
      }
      //right node
      if (node.right) {
        traverse(node.right);
      }
    };

    //Execute the function/algorithm
    traverse(this.root);

    return result;
  }

  inOrder() {
    const result = [];
    const traverse = (node) => {

      if (node.left) {
        traverse(node.left)
      }

      result.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left)
      }

      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }

  treeMax() {
    if (this.root === null) throw new Error('you do not  have a tree');
    let temp = 0;
    const traverse = (node) => {
      if (temp < node.value) {
        temp = node.value;
      }
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return temp;

    // if (!this.root) return false;
    // let temp = this.root.left;
    // let current = this.root;
    // const traverse = (node) => {
    //   if (temp < current.value) {
    //     current = temp.value;
    //     // current = temp;
    //   }
    //   if (node.left) {
    //     traverse(node.left);
    //   }
    //   if (node.right) {
    //     traverse(node.right);
    //   }
    //   traverse(this.root);
    //   return current.value;

    // }
  }
}

// const preOrderSum = (tree) => {

//   let num = 0;
//   const traverse = (node) => {
//     num = num + node.value;
//     console.log(num);
//     if (node.left) {
//       traverse(node.left);
//     }
//     if (node.right) {
//       traverse(node.right);
//     }
//   }
//   return num;
// }

// console.log(preOrderSum(tree));



class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) return this.root = new Node(value);

    let curr = this.root;
    while (curr != null) {
      if (curr.value > value) {
        //check if left node has value
        if (curr.left != null) curr = curr.left;
        else {
          curr.left = new Node(value);
          break;
        }
      } else { // curr.value < value
        if (curr.right != null) curr = curr.right;
        else {
          curr.right = new Node(value);
          break
        }
      }
    }
  }

  contains(target) {
    if (!this.root) return false;
    let pointer = this.root;
    if (target > pointer.value) {
      pointer = pointer.right;
    }
    if (target < pointer.value) {
      pointer = pointer.left;
    }
    if (target === pointer.value) return true
    else { return false };
  }
}

//----------Kary tree-------// 
// class KaryNode {
//   constructor(value, k) {
//     this.value = value;
//     // this.children = [];
//     this.children = new Array(k).fill(null);
//   }
// }


// class KaryTree {
//   constructor() {
//     this.root = null;
//   }
// }


module.exports = { Node, Tree, BST, preOrderSum };