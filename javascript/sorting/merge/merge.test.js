'use strict';

const mergeSort = require('./merge');

describe('Merge sort', () => {
  let array = [3, 5, 1, 10];
  test('if array is sorted', () => {
    let result = mergeSort(array);

    expect(result).toEqual([1, 3, 5 ,10]);
  });
});

