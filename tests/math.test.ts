import { add, subtract } from "../src/math";

describe("Math functions", () => {
  test("add() should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract() should return the difference of two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("subtract() and addition() should return the sum of two numbers", () => {
    expect(subtract(5, 3) + add(2, 3)).toBe(7);
  });
});
