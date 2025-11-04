function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 4));

/*

power
Instructions
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

Test(s)
Test 1
describe('subject', function() {
    it('should return the power of a number to an exponent', function() {
        expect(power(2,0)).toBe(1)
        expect(power(2,2)).toBe(4)
        expect(power(2,4)).toBe(16)
    });
});

*/
