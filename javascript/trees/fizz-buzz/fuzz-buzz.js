
function fizzBuzzfy(tree) {
  if (tree.value % 3 === 0) {
    tree.value = 'fizz';
    console.log('3',tree.value);
  }
  if (tree.value % 5 === 0) {
    tree.value = 'buzz';
    console.log("5",tree.value);
  }
  if (tree.value % 5 === tree.value % 3) {
    tree.value = 'fizz-buzz';
    console.log("3,5",tree.value);
  }

  if (tree.left) fizzBuzzfy(tree.left);
  if (tree.right) fizzBuzzfy(tree.right);

  return tree;
}

let tree = new Tree();
tree.root = new Node(15);
tree.root.left = new Node(5);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);

console.log(fizzBuzzfy(tree));

module.exports = fizzBuzzfy;