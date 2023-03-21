# Blog Notes: Insertion Sort

## introduction:

insertion sort is a sorting algorithm that select a value and compare to the value that is one the left while intrating a array, if the selected value is larger than the compared value, move the selected value to left. Repeat the same behavior until array is completed sort from smallest to largestest.

## Pseudocode

    Insert(int[] sorted, int value)
      initialize i to 0
      WHILE value > sorted[i]
        set i to i + 1
      WHILE i < sorted.length
        set temp to sorted[i]
        set sorted[i] to value
        set value to temp
        set i to i + 1
      append value to sorted

    InsertionSort(int[] input)
      LET sorted = New Empty Array
      sorted[0] = input[0]
      FOR i from 1 up to input.length
        Insert(sorted, input[i])
      return sorted

## step thru
![stepThru](../../javascript/assets/codeChallenge-26.jpeg)

### testing
`npm test insertion.test.js`