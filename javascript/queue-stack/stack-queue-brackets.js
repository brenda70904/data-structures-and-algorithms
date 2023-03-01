const brackets = (str) => {
  let bracketsParser = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let stack = new Stack();
  let tempArr = str.split('');
  for (let i in tempArr) {
    if (tempArr[i] === '{' || tempArr[i] === '[' || tempArr[i] === '(') {
      stack.push(tempArr[i]);
    } else if (tempArr[i] === '}' || tempArr[i] === ']' || tempArr[i] === ')') {
      if (bracketsParser[stack.top.value] === tempArr[i]) {
        stack.pop();
      } else {
        return false;
      }
      return true;
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
};