/**
 * a function which takes another function as a parameter or returns a function is called higher order function.
 * we preform functional programming using callbacks and higher order functions.
 * this is only possible because functions are first class citizens in javascript.
 */

let radius = [3, 4, 5, 6, 7];

// calculate is a Higher Order Function.
// this function have similar functionality as map function provided by javascript.
// polyfill for map functions.
Array.prototype.calculate = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i]));
  }
  return output;
};

const area = radius.calculate((radius) => Math.PI * radius * radius);
const circumference = radius.calculate((radius) => 2 * Math.PI * radius);
const diameter = radius.calculate((radius) => 2 * radius);

console.log(area, circumference, diameter);
