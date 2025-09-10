// unboxing and boxing in javascript.
const strLit = "hello, world!";
const strObj = new String("hello, world!");
debugger;

// boxing in javascript, wraps the string literal to string object.
console.log(strLit.toUpperCase());

// unboxing, turns an object to its primitive datatype.
console.log(strObj.valueOf(), typeof strObj.valueOf());

// function can also be declared using object notation.
const funcLit = function (num) {
  return num * num;
};
const funcObj = new Function("num", "return num * num");
console.log(funcLit(5), funcObj(3));

// example - 3 (array ond object literals are pure objects).
const objLit = {};
const objObj = new Object();
debugger;
