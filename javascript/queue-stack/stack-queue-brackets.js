const {Stack} = require('./index');

const brackets = (str) => {
  if(str.length === 0) return false;
  let stack = new Stack();
  let tempArr = str.split('');
  let bracketsParser = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  for (let i in tempArr) {
    if (tempArr[i] === '{' || tempArr[i] === '[' || tempArr[i] === '(') {
      stack.push(tempArr[i]);
    } else if (tempArr[i] === '}' || tempArr[i] === ']' || tempArr[i] === ')') {
      if (bracketsParser[stack.peek()] === tempArr[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
};

module.exports = brackets;
