console.log(a);
x();
// y(); // throws an error.
console.log(x);
console.log(y);

// ===============
// a is attached to the global object.
var a = 5;

function x() {
    console.log('hello');
}

var y = () => {
    console.log('hello bro');
};
// ===============

console.log(a);
x();
y();
console.log(x);
console.log(y);

// hoisting is a special behavior of javascript that dependents on how the memory and storage is allocated to the variables in javascript.

// to understand hoisting you can refer to the video of how javascript code is executed (from javascript udemy course).

// this is the real reason behind the hoisting behavior of javascript don't explain crap like "js move the variable to the top of the file and then execute it bla bla bla".

// to understand below behavior understand the concept of temporal dead zone.
console.log(t);

// const t = 10;
// let t = 10;
var t = 10;

greet('mohd zama');

// function declaration - (provide hoisting).
function greet(fullName) {
    console.log(`hello, ${fullName}`);
}

// function expression - (used to avoid hoisting).
const greet_expression = function (fullName) {
    console.log(`hello, ${fullName}`);
};
console.log(greet_expression());
