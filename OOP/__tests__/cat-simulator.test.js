const Cat = require("../cat-simulator");

describe("Cat", () => {
  let cat;

  beforeEach(() => {
    cat = new Cat("Whiskers", "Gray");
  });

  test("should create a new cat with correct initial stats and hair color", () => {
    const stats = cat.getStats();
    expect(stats.name).toBe("Whiskers");
    expect(stats.health).toBe(100);
    expect(stats.energy).toBe(100);
    expect(stats.happiness).toBe(100);
    expect(stats.hairColor).toBe("Gray");
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
      cat.play();
      const stats = cat.getStats();
      expect(stats.energy).toBe(80);
      expect(stats.happiness).toBe(100);
      expect(consoleSpy).toHaveBeenCalledWith("Meow. Pouncing on a toy mouse!");
    });
  });
});
