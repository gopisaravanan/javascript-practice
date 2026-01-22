// Q1
console.log(a);
var a = 10;
// Output: undefined

// Q2
console.log(b);
let b = 20;
// Output: ReferenceError: Cannot access 'b' before initialization

// Q3
sayHi();

function sayHi() {
  console.log("Hi");
}
// Output: Hi
// function declarations are fully hoisted

// Q4
foo();

var foo = function () {
  console.log("Hello");
};

// Output: TypeError: foo is not a function