#!/usr/bin/env node

/**
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
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
    default:
      throw new Error(`Unsupported operation "${operation}".`);
  }
}

function printUsage() {
  console.log("Usage: node src/calculator.js <operation> <num1> <num2>");
  console.log("Supported operations: addition, subtraction, multiplication, division");
}

if (require.main === module) {
  const [, , operation, firstInput, secondInput] = process.argv;

  if (!operation || firstInput === undefined || secondInput === undefined) {
    printUsage();
    process.exit(1);
  }

  const num1 = Number(firstInput);
  const num2 = Number(secondInput);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
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
  calculate,
};
