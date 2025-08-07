function validAnagram(a, b) {
  /*
  at first if lenghts are not the same return false

  we will need object to track letters
  we will need loops to count letters



  */
  if (a.length !== b.length) return false;

  const lookup = {};

  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < b.length; i++) {
    let letter = b[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  console.log(lookup);

  return true;
}

console.log(validAnagram("luka", "akul"));
console.log("//////////////");
console.log(validAnagram("luka", "abcd"));
console.log("//////////////");
console.log(validAnagram("luka", "acd"));
