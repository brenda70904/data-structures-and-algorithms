# Blog Notes: Merge Sort

## introduction

Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

### Pseudo Code

    ALGORITHM Mergesort(arr)
        DECLARE n <-- arr.length

        if n > 1
          DECLARE mid <-- n/2
          DECLARE left <-- arr[0...mid]
          DECLARE right <-- arr[mid...n]
          // sort the left side
          Mergesort(left)
          // sort the right side
          Mergesort(right)
          // merge the sorted left and right sides together
          Merge(left, right, arr)

    ALGORITHM Merge(left, right, arr)
        DECLARE i <-- 0
        DECLARE j <-- 0
        DECLARE k <-- 0

        while i < left.length && j < right.length
            if left[i] <= right[j]
                arr[k] <-- left[i]
                i <-- i + 1
            else
                arr[k] <-- right[j]
                j <-- j + 1

            k <-- k + 1

        if i = left.length
          set remaining entries in arr to remaining values in right
        else
          set remaining entries in arr to remaining values in left

step through
![image](../../assets/codeChallenge-27.jpeg)

# Efficency

time: O(N Logn)
space: O(N)
