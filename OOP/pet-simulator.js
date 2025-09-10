class Pet {
  #name;
  #health;
  #energy;
  #happiness;

  #checkState() {
    if (this.#energy < 20) {
      console.log("WARNING: Pet is too tired.");
    }
    if (this.#happiness < 20) {
      console.log("WARNING: Pet is too bored.");
    }
    if (this.#health < 20) {
      console.log("WARNING: Pet is too sick.");
    }
  }

  getStats() {
    return {
      name: this.#name,
      health: this.#health,
      energy: this.#energy,
      happiness: this.#happiness,
    };
  }

  constructor(name) {
    this.#name = name;
    this.#health = 100;
    this.#energy = 100;
    this.#happiness = 100;
  }

  showStats() {
    console.table(this.getStats());
  }

  play() {
    this.#checkState();

    this.#energy = Math.max(0, this.#energy - 20);
    this.#happiness = Math.min(100, this.#happiness + 20);

    return true;
  }

  sleep() {
    this.#checkState();

    this.#energy = Math.min(100, this.#energy + 20);
  }

  feed() {
    this.#checkState();

    this.#health = Math.min(100, this.#health + 20);
    this.#energy = Math.min(100, this.#energy + 20);
  }
}

const simon = new Pet("Simon");

module.exports = Pet;
