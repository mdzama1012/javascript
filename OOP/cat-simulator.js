const Pet = require("./pet-simulator");

class Cat extends Pet {
  #hairColor;

  constructor(name, hairColor) {
    super(name);
    this.#hairColor = hairColor;
  }

  // Polymorphism
  play() {
    super.play();
    console.log("Meow. Pouncing on a toy mouse!");
  }

  getStats() {
    const stats = super.getStats();
    stats.hairColor = this.#hairColor;
    return stats;
  }
}

module.exports = Cat;
