function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return "could not find";
}

console.log(linearSearch([2, 3, 4, 5], 5));
