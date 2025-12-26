/**
 * Boxing and unboxing in JavaScript
 */

const strLit = "hello, world!";
const strObj = new String("hello, world!");

// Example Boxing: JavaScript, wraps the string literal to string object.
console.log(strLit.toUpperCase());

// Example Unboxing: Turns an object to its primitive datatype.
console.log(strObj.valueOf(), typeof strObj.valueOf());

// Function can also be declared using object notation.
const funcLit = function (num) {
  return num * num;
};
const funcObj = new Function("num", "return num * num");
console.log(funcLit(5), funcObj(3));

// Example 3: Arrays ond objects literals are pure objects.
const objLit = {};
const objObj = new Object();
