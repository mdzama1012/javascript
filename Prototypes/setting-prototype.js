/**
 * There are various ways to setup prototype object for an object.
 *
 * 1. Object.create()
 * 2. constructor functions
 *
 */

// Example 1: using Object.create()
const personPrototype1 = {
  greet: function () {
    console.log(`Hello`);
  },
};
const personA = Object.create(personPrototype1);
personA.greet();
debugger; // Inspect personA object.

/**
 * Each function in javascript has a property prototype.
 *
 * When we call a function as constructor this property is set as a prototype of newly created object.
 */
function fn() {
  console.log("Hello");
}
debugger; // Inspect fn function.

// Example 2: using constructor functions
const personPrototype2 = {
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, personPrototype2);
const personB = new Person("Mohammad Zama");
personB.greet();
debugger; // Inspect personB object.

/**
 * Prototype in javascript is a powerful feature, that allows us to reuse code.
 *
 * In particular they support a version of inheritance.
 *
 * In JavaScript, constructors and the prototype chain relate to OOP concepts like classes and instances, inheritance, and encapsulation.
 *
 * Next, ES6+ will introduce classes, which is a simple way to implement prototypal inheritance
 */
