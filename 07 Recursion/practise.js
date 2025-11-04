function productOfArray(array) {
  if (array.length === 0) return 1;

  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3]));

/*

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

Test(s)
Test 1
describe("#productOfArray", function(){
  it("returns the product of all the numbers in an array", function(){
    expect(productOfArray([1,2,3])).toEqual(6)
    expect(productOfArray([0,1,2,3])).toEqual(0)
    expect(productOfArray([1,-2,3])).toEqual(-6)
  });
});
Solution(s)

*/
