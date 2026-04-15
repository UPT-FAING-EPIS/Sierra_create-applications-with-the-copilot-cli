const test = require("node:test");
const assert = require("node:assert/strict");

const {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
} = require("../calculator");

test("addition adds two positive numbers", () => {
  assert.equal(addition(2, 3), 5);
});

test("addition handles negative and decimal numbers", () => {
  assert.equal(addition(-2, 0.5), -1.5);
});

test("subtraction subtracts correctly", () => {
  assert.equal(subtraction(10, 4), 6);
});

test("subtraction handles negative result", () => {
  assert.equal(subtraction(3, 8), -5);
});

test("multiplication multiplies correctly", () => {
  assert.equal(multiplication(7, 6), 42);
});

test("multiplication with zero returns zero", () => {
  assert.equal(multiplication(9, 0), 0);
});

test("division divides correctly", () => {
  assert.equal(division(20, 4), 5);
});

test("division supports decimal result", () => {
  assert.equal(division(7, 2), 3.5);
});

test("division by zero throws an error", () => {
  assert.throws(
    () => division(10, 0),
    new Error("Division by zero is not allowed.")
  );
});

test("calculate supports addition aliases", () => {
  assert.equal(calculate("addition", 1, 2), 3);
  assert.equal(calculate("add", 1, 2), 3);
});

test("calculate supports subtraction aliases", () => {
  assert.equal(calculate("subtraction", 8, 3), 5);
  assert.equal(calculate("subtract", 8, 3), 5);
});

test("calculate supports multiplication aliases", () => {
  assert.equal(calculate("multiplication", 3, 4), 12);
  assert.equal(calculate("multiply", 3, 4), 12);
});

test("calculate supports division aliases", () => {
  assert.equal(calculate("division", 12, 3), 4);
  assert.equal(calculate("divide", 12, 3), 4);
});

test("calculate is case-insensitive", () => {
  assert.equal(calculate("AdDiTiOn", 5, 5), 10);
});

test("calculate throws on unsupported operations", () => {
  assert.throws(
    () => calculate("modulo", 10, 3),
    new Error('Unsupported operation "modulo".')
  );
});
