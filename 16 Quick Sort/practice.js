function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
    swap(arr, start, swapIdx);
  }

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr, left, right);

  //left
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, left + 1, pivotIndex);
}

// console.log(pivot([4, 9, 2, 1, 5, 7, 6, 3]));
console.log(quickSort([4, 9, 2, 1, 5, 7, 6, 3]));
