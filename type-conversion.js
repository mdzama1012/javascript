let amount = '95.5';

// different ways to change string to number:
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// different ways to change number to string:
// amount = amount.toString();
// amount = String(amount);

// change string to decimal:
// amount = parseFloat(amount);

// change number to boolean true or false depend on truthy and falsy.
// amount = Boolean(amount);

// operations that return NaN value (special type of number).
// console.log(Math.sqrt(-1));
// console.log(1 * NaN);
// console.log('test' - 5);
// console.log(undefined + undefined);

console.log(typeof amount, amount);

let num = 'Hello';

num = parseInt(num);
console.log(typeof num, num);
