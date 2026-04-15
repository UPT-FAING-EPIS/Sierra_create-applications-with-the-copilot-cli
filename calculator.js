#!/usr/bin/env node

const [, , operation, firstInput, secondInput] = process.argv;

function printUsage() {
  console.log("Usage: node calculator.js <operation> <num1> <num2>");
  console.log("Operations: add, subtract, multiply, divide");
}

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

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = num1 + num2;
    break;
  case "subtract":
    result = num1 - num2;
    break;
  case "multiply":
    result = num1 * num2;
    break;
  case "divide":
    if (num2 === 0) {
      console.error("Error: division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error(`Error: unsupported operation "${operation}".`);
    printUsage();
    process.exit(1);
}

console.log(`Result: ${result}`);
