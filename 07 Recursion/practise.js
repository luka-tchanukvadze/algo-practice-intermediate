function recursiveRange(number) {
  if (number === 0) return 0;

  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(6));

function fib(number) {
  if (number <= 2) return 1;

  return fib(number - 1) + fib(number - 2);
}

console.log(recursiveRange(4));
console.log(fib(6));

/*



Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

Test(s)
Test 1
describe('subject', function() {
    it('should do an action', function() {
        expect(fib(4)).toEqual(3)
expect(fib(10)).toEqual(55)
expect(fib(28)).toEqual(317811)
expect(fib(35)).toEqual(9227465)
    });
});



Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

Test(s)
Test 1
describe('subject', function() {
    it('should sum numbers from 0 to 6', function() {
        expect(recursiveRange(6)).toBe(21)
    });
    it('should sum numbers from 0 to 10', function() {
        expect(recursiveRange(10)).toBe(55)
    });
});

*/
