function mergeSort(originalArray) {
  if (originalArray.length > 1) {
    let half = Math.floor(originalArray.length / 2);
    let left = originalArray.slice(0, half);
    let right = originalArray.slice(half);
    mergeSort(left);
    mergeSort(right);
    helper(left, right, originalArray);
  }
  return originalArray;
}

function helper(l1, l2, originalArray) {
  let i1 = 0;
  let i2 = 0;
  let index = 0;
  while (i1 < l1.length && i2 < l2.length) {
    if (l1[i1] < l2[i2]) {
      originalArray[index] = l1[i1];
      i1++;
    } else {
      originalArray[index] = l2[i2];
      i2++;
    }
    index++;
  }
  if (i1 < l1.length) {
    for (let i = i1; i < l1.length; i++) {
      originalArray[index] = l1[i1];
      index++;
    }
  }
  if (i2 < l2.length) {
    for (let i = i2; i < l2.length; i++) {
      originalArray[index] = l2[i2];
      index++;
    }
  }
}

module.exports = mergeSort ;
