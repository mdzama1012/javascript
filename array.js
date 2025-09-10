/**
 *
 * array are ordered collection of values.
 *
 * they hold element of various datatypes such as numbers, string, boolean, object
 * array, and function.
 *
 */
let x = null;

const numbers = [90, 5, 44, 5, 3];

x = numbers[0];
x = numbers[numbers.length - 1];

// make an array of n length with all values set as 0.
const arr = Array.from({ length: 5 }, () => 0);

// push() is used add one or more elements to the end of the array.
numbers.push(12);

// pop() is used to remove the last element from the array and return it.
x = numbers.pop();

// unshift() is used to add one or more elements to the beginning of the array.
numbers.unshift(12); // time complexity is O(n)

// shift() is used to remove the first element from the array and return it.
x = numbers.shift(); // time complexity is O(n)

/**
 * slice() creates a shallow copy of a portion of the array.
 * @param1: start index (inclusive)
 * @param2: end index (exclusive)
 */
x = numbers.slice(1, 3); // output => [5, 44]

// concat() creates a new array by concatenating existing arrays.
x = numbers.concat([1, 2], [3, 4]);

// join() joins elements of an array into string, separated by a specified separator.
x = numbers.join(", "); // output => "1, 2, 3, 4, 5, 6"

// indexOf() return first index where given element is found or -1 if not present.
x = numbers.indexOf(5);

// includes() return true if array contains given element, otherwise false.
x = numbers.includes(5);

// find() return value of the first element in the array where callback returns true, otherwise undefined.
x = numbers.find((number) => number === 5);
