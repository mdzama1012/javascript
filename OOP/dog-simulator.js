const Pet = require("./pet-simulator");

class Dog extends Pet {
  #breed;

  constructor(name, breed) {
    super(name);
    this.#breed = breed;
  }

  // Polymorphism
  play() {
    super.play();
    console.log("Woof! Chasing a ball is fun!");
  }

  getStats() {
    const stats = super.getStats();
    stats.breed = this.#breed;
    return stats;
  }
}

module.exports = Dog;
