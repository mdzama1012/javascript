/**
 * NOTES:
 * functions are heart ❤️ of javascript.
 * difference between function statement and function expression is hoisting.
 * anonymous functions are used inside IIFE (immediately invoked function expression).
 * anonymous functions are used where functions are used as a values.
 * first class functions in javascript.
 * we can return and pass functions as values and this ability of a programming language is know as first class function.
 * functions in javascript are first class citizens(same thing as above).
 * arguments are used in function invocation.
 * parameters are used in function declaration.
 */

// hoisting of function.
x();
// y(); // this throws an error.

// function statement and function declaration are same things.
function x() {
	console.log("hello");
}

// function expression.
var y = function () {
	console.log("hello");
};

// anonymous function. (should be wrapped around parenthesis else throws an error).
(function () {
	console.log("hello");
});

// named function expression.
const x = function namedFunc() {
	console.log("hello");
};
x();
// reference error because namedFunc is not defined.
// namedFunc();

// parameters vs arguments.
// a and b are parameters.
// 1 and 2 are arguments.
function x(a, b) {
	console.log(a, b);
}
x(1, 2);
