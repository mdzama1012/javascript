/**
 * classes are added to javascript in ES6 update.
 *
 * classes in javascript is syntactical sugar, the concept of OOPs in javascript way all way there.
 *
 * It's possible to use prototypes and constructors to implement OOPs in javascript.
 *
 * Under the hood, they still use prototypes. its just a way to make it easier to set up a prototype chain.
 */

class Shape {
  name;
  constructor(name) {
    this.name = name;
  }

  logShape() {
    console.log("This object has a shape of ", this.name);
  }
}
const circle = new Shape("circle");
debugger; // inspect circle object

class Rectangle extends Shape {
  width;
  height;

  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }
}
const rect = new Rectangle("square 1", 20, 20);
debugger; // inspect rect object and its prototype chain.
