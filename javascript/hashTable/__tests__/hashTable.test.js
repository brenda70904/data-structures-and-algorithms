const {HashTable, repeatWord} = require('../index');
const {Tree, Node} = require('../../trees/index');
const tree_intersection = require('../tree-intersection');

describe('HashTable', () => {
  const table = new HashTable(100);
  table.set('Brenda', '1234');
  table.set('Sam', '2468');
  table.set('Janny', '1357');

  it('can successfully store data', () => {

    expect(table.get('Brenda')).toBe('1234');
    expect(table.get('Sam')).toBe('2468');
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let result = table.key();
    expect(result).toContain('Brenda');
    expect(result).toContain('Sam');
    expect(result).toContain('Janny');
  });

  it('Successfully handle a collision within the hashtable', () => {

    expect(table.set('Kevin', '0000')).toEqual(table.set('Kevin', '9999'));
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(table.has('kevin')).toBeFalsy();
    expect(table.has('Brenda')).toBeTruthy();
  });
});

describe('RepeatWords Function', () => {
  it('Tests that the function correctly returns the first repeated word encountered in the input', () => {
    const str = 'hello world hello world';
    expect(repeatWord(str)).toEqual('world');
  });
})

describe('Tree-intersaction', ()=>{
  

  it('can return the keys', ()=>{
    let tree1 = new Tree();
  tree1.root = new Node(10);
  tree1.root.left = new Node(11);
  tree1.root.right = new Node(12);
  tree1.root.left.left = new Node(13);
  tree1.root.left.right = new Node(14);
  tree1.root.right.left = new Node(15);
  tree1.root.right.right = new Node(16);

  let tree2 = new Tree();
  tree2.root = new Node(10);
  tree2.root.left = new Node(1);
  tree2.root.right = new Node(12);
  tree2.root.left.left = new Node(13);
  tree2.root.left.right = new Node(19);
  tree2.root.right.left = new Node(15);
  tree2.root.right.right = new Node(20);

    let result = tree_intersection(tree1, tree2)
    expect(result).toEqual([10,12,13,15])
  });
})