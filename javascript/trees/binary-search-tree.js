// 'use strict';


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   add(value) {
//     let newNode = new Node(value);
//     if (!this.root) {
//       this.root = newNode;
//     }

//     let curr = this.root;

//     while (curr != null) {

//       if (curr > newNode) {
//         //check if left node has value
//         if (curr.left != null && curr.left > newNode) {
//           curr = curr.left;
//         } else if (curr.left != null && curr.left < newNode) {
//           curr = curr.right;
//         }
//       } else {
//         curr.left = newNode;
//       }
//       if (curr < newNode) {
//         if (curr.right != null && curr.right > newNode) {
//           curr = curr.right;
//         } else if (curr.right != null && curr.right < newNode) {
//           curr = curr.left;
//         }
//       } else {
//         curr.right = newNode;
//       }
//     }

//   }
// }

// module.exports = BST