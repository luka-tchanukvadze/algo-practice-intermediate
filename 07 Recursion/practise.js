function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(4));

/*

Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

Test(s)
Test 1
describe('subject', function() {
    it('should return the factorial of a number', function() {
       expect(factorial(0)).toBe(1)
       expect(factorial(1)).toBe(1)
       expect(factorial(2)).toBe(2)
       expect(factorial(4)).toBe(24)
       expect(factorial(7)).toBe(5040)
    });
});

*/
