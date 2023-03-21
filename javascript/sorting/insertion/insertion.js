'use strict';

function insertSort(unsorted) {
  //let sorted = []
  for (let i = 1; i < unsorted.length; i++) {
    //Initial index values
    let previousIndex = i - 1;
    let currIndex = i;
    while (previousIndex >= 0) {
      if (unsorted[currIndex] > unsorted[previousIndex]) {
        break;
      } else {// current value is smaller than its preivous value
        //swap
        let temp = unsorted[previousIndex];
        unsorted[previousIndex] = unsorted[currIndex];
        unsorted[currIndex] = temp;
        //
        previousIndex--;
        currIndex--;
      }
    }
  }
  return unsorted;
}

console.log(insertSort([8, 4, 23, 42, 16, 15]));

// const insert = (sorted, value) => {
//   let i = 0;
//   while (value > sorted[i]) {
//     i = i + 1;
//     while (i < sorted.length) {
//       let temp = sorted[i];
//       sorted[i] = value;
//       value = temp;
//       i++;
//     }
//     sorted.push(value);
//   }
// };

// const insertionSort = (input) => {
//   let sorted = [];
//   sorted[0] = input[0];
//   for (let i = 1; i < input.length; i++) {
//     insert(sorted, input[i]);
//   }
//   return sorted;
// };

module.exports = insertSort ;
