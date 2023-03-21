'use strict';

const insertSort = require('./insertion');

describe('insertion sort', () => {
  let array = [3, 5, 1, 10];
  test('if array is sorted', () => {
    let result = insertSort(array);

    expect(result).toEqual([1, 3, 5 ,10]);
  });
});

