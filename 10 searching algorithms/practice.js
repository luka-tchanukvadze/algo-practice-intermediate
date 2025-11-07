function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  let middle = Math.floor((start + end) / 2);
  while (start <= end && arr[middle] !== val) {
    if (arr[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return val !== arr[middle] ? -1 : middle;
}

console.log(binarySearch([1, 2, 3], 3));

// Binary Search BIG O
