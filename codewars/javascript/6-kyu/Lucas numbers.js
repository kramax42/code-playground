// 6 kyu
// Lucas numbers
// https://www.codewars.com/kata/55a7de09273f6652b200002e


// Task description:
// Lucas numbers are numbers in a sequence defined like this:
// L(n) = 2 if n = 0
// L(n) = 1 if n = 1
// otherwise
// L(n) = L(n - 1) + L(n - 2)
// Your mission is to define a function lucasnum(n) that returns the nth term of this sequence.
// Note: It should work for negative numbers as well (how you do this is you flip the equation around,
// so for negative numbers: L(n) = L(n + 2) - L(n + 1))
// Examples:
// lucasnum(-10) -> 123
// lucasnum(-5) -> -11
// lucasnum(-1) -> -1
// lucasnum(0) -> 2
// lucasnum(1) -> 1
// lucasnum(5) -> 11
// lucasnum(10) -> 123

// Solution
const init = {
  0: 2,
  1: 1
}

function lucasnum(n) {
  if (init[n]) {
    return init[n];
  } else if (n < 0) {
    init[n] = lucasnum(n + 2) - lucasnum(n + 1);
    return init[n];
  } else {
    init[n] = lucasnum(n - 1) + lucasnum(n - 2);
    return init[n];
  }
}
