const fizzBuzzfy = require('../fuzz-buzz');
const {Node, Tree} = require('../..');

describe('fizzBuzzfy', () => {
  let tree = new Tree();
  tree.root = new Node(15);
  tree.root.left = new Node(5);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);

  it('can change the value of the node to fizz if the value is divisible by 3', () => {
    let result = fizzBuzzfy(tree);
    expect(result.root.value).toEqual('fiz-buzz');
  });
});