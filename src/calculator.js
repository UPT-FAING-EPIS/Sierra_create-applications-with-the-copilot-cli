#!/usr/bin/env node

/**
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - square root
 */
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

function calculate(operation, a, b) {
  switch (operation.toLowerCase()) {
    case "addition":
    case "add":
      return addition(a, b);
    case "subtraction":
    case "subtract":
      return subtraction(a, b);
    case "multiplication":
    case "multiply":
      return multiplication(a, b);
    case "division":
    case "divide":
      return division(a, b);
    case "modulo":
    case "mod":
      return modulo(a, b);
    case "power":
    case "pow":
      return power(a, b);
    case "squareroot":
    case "square-root":
    case "sqrt":
      return squareRoot(a);
    default:
      throw new Error(`Unsupported operation "${operation}".`);
  }
}

function printUsage() {
  console.log("Usage: node src/calculator.js <operation> <num1> [num2]");
  console.log("Supported operations: addition, subtraction, multiplication, division, modulo, power, squareRoot");
}

if (require.main === module) {
  const [, , operation, firstInput, secondInput] = process.argv;
  const normalizedOperation = operation?.toLowerCase();
  const isSquareRootOperation =
    normalizedOperation === "squareroot" ||
    normalizedOperation === "square-root" ||
    normalizedOperation === "sqrt";

  if (!operation || firstInput === undefined || (!isSquareRootOperation && secondInput === undefined)) {
    printUsage();
    process.exit(1);
  }

  const num1 = Number(firstInput);
  const num2 = isSquareRootOperation ? undefined : Number(secondInput);

  if (Number.isNaN(num1) || (!isSquareRootOperation && Number.isNaN(num2))) {
    console.error("Error: num1 and num2 must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(operation, num1, num2);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    printUsage();
    process.exit(1);
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
};
