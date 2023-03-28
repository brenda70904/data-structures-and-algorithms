
const { HashTable } =require(".") ;
const tree_intersection = (root1, root2) => {
  let table = new HashTable();
  let result = [] // storing the key
  helper(root1, root2);
  for (let i = 0; i < table.length; i++) {
    result.push(table[i])
  }
  return result;
}

const helper = (root1Val, root2Val) => {
  if (root1Val === root2Val) {
    table.set(root1Val, root2Val);
  }
  helper(root1Val.left, root2Val.left);
  helper(root1Val.right, root2Val.right);
}

module.exports = tree_intersection
