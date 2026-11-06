"use strict";
/**
 * Simple utility functions for demonstration
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.multiply = multiply;
exports.greet = greet;
/**
 * Adds two numbers together
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
function add(a, b) {
    return a + b;
}
/**
 * Multiplies two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The product of a and b
 */
function multiply(a, b) {
    return a * b;
}
/**
 * Greets a person by name
 * @param name - The name of the person to greet
 * @returns A greeting message
 */
function greet(name) {
    if (!name || name.trim() === '') {
        return 'Hello, World!';
    }
    return `Hello, ${name.trim()}!`;
}
//# sourceMappingURL=index.js.map