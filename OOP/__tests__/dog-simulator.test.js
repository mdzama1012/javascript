const Dog = require("../dog-simulator");

describe("Dog", () => {
  let dog;

  beforeEach(() => {
    dog = new Dog("Buddy", "Golden Retriever");
  });

  test("should create a new dog with correct initial stats and breed", () => {
    const stats = dog.getStats();
    expect(stats.name).toBe("Buddy");
    expect(stats.health).toBe(100);
    expect(stats.energy).toBe(100);
    expect(stats.happiness).toBe(100);
    expect(stats.breed).toBe("Golden Retriever");
  });

  describe("play", () => {
    let consoleSpy;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    test("should decrease energy, increase happiness, and log a message", () => {
      dog.play();
      const stats = dog.getStats();
      expect(stats.energy).toBe(80);
      expect(stats.happiness).toBe(100);
      expect(consoleSpy).toHaveBeenCalledWith("Woof! Chasing a ball is fun!");
    });
  });
});
