const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();
console.log(myObject);
console.log(myObject.__proto__);

/**
 * Every object in javascript has a build in property called prototype.
 *
 * Prototype is itself an object, so it has its own properties this is what makes a prototype chain.
 *
 * object.__proto__ === object's prototype object.
 *
 * When accessing a property on an object, javascript will check the whole prototype chain.
 */

// Example of shadowing property.
const dob = new Date(2002, 12, 10);

// Inspect dob object.
debugger;

console.log(dob.getTime());
dob.getTime = function () {
  console.log("Happy birthday!");
};
console.log(dob.getTime());

// Inspect dob object.
debugger;
