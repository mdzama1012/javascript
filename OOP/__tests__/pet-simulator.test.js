const Pet = require("../pet-simulator");

describe("Pet", () => {
  let pet;

  beforeEach(() => {
    pet = new Pet("Test Pet");
  });

  test("should create a new pet with correct initial stats", () => {
    const stats = pet.getStats();
    expect(stats.name).toBe("Test Pet");
    expect(stats.health).toBe(100);
    expect(stats.energy).toBe(100);
    expect(stats.happiness).toBe(100);
  });

  describe("play", () => {
    test("should decrease energy and increase happiness", () => {
      pet.play();
      const stats = pet.getStats();
      expect(stats.energy).toBe(80);
      expect(stats.happiness).toBe(100);
    });

    test("should not let happiness exceed 100", () => {
      pet.play();
      pet.play();
      const stats = pet.getStats();
      expect(stats.happiness).toBe(100);
    });

    test("should not let energy go below 0", () => {
      for (let i = 0; i < 6; i++) {
        pet.play();
      }
      const stats = pet.getStats();
      expect(stats.energy).toBe(0);
    });
  });

  describe("sleep", () => {
    test("should increase energy", () => {
      pet.play();
      pet.sleep();
      const stats = pet.getStats();
      expect(stats.energy).toBe(100);
    });

    test("should not let energy exceed 100", () => {
      pet.sleep();
      const stats = pet.getStats();
      expect(stats.energy).toBe(100);
    });
  });

  describe("feed", () => {
    test("should increase health and energy", () => {
      pet.play();
      pet.feed();
      const stats = pet.getStats();
      expect(stats.health).toBe(100);
      expect(stats.energy).toBe(100);
    });

    test("should not let health and energy exceed 100", () => {
      pet.feed();
      const stats = pet.getStats();
      expect(stats.health).toBe(100);
      expect(stats.energy).toBe(100);
    });
  });
});
