// Q1
var x = 10;

function test() {
  console.log(x);
  var x = 20;
}

test();

// Output: undefined
// Explanation: The variable 'x' inside the function is hoisted and initialized to undefined,
// so the console.log prints undefined instead of 10.

// Q2
let a = 10;

{
  let a = 20;
  console.log(a);
}

console.log(a);
// Output:
// 20
// 10
// Explanation: The inner block has its own 'a' variable which shadows the outer 'a'.

// Q3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output:
// 3
// 3
// 3
// Explanation: 'var' is function-scoped so its ignores the block scope, so by the time the timeouts execute, 'i' is 3.
// to fix this, use 'let' instead of 'var'.