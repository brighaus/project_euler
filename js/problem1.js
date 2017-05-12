/**
  https://projecteuler.net/problem=1
  If we list all the natural numbers below 10
  that are multiples of 3 or 5, we get 3, 5, 6 and 9.

  The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 1000.
 */

// multiples of 3 and 5
var multiples = [];

// get sum of multiples of 3 and 5 below 1000
var total = 0;

var f0 = performance.now();

// old-shcool
for (var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
    multiples.push(i);
  }
}

var f1 = performance.now();

var r1 = performance.now();

// es6
var mtotal = multiples.reduce(
  function (a, b) { return a + b; }
);
var r2 = performance.now();

console.log('for loop sum of multiples of 3 and 5 under 1000: ' + total);
console.log('for loop time: ' + (f1 - f0));

console.log('reduce sum of multiples of 3 and 5 under 1000: ' + mtotal);
console.log('es6 reduce loop time: ' + (r2 - r1));

phantom.exit();
