"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("./index");
(0, vitest_1.describe)('add', () => {
    (0, vitest_1.it)('should add two positive numbers', () => {
        (0, vitest_1.expect)((0, index_1.add)(2, 3)).toBe(5);
    });
    (0, vitest_1.it)('should add negative numbers', () => {
        (0, vitest_1.expect)((0, index_1.add)(-2, -3)).toBe(-5);
    });
    (0, vitest_1.it)('should add positive and negative numbers', () => {
        (0, vitest_1.expect)((0, index_1.add)(5, -3)).toBe(2);
    });
    (0, vitest_1.it)('should add zero', () => {
        (0, vitest_1.expect)((0, index_1.add)(0, 5)).toBe(5);
        (0, vitest_1.expect)((0, index_1.add)(5, 0)).toBe(5);
    });
});
(0, vitest_1.describe)('multiply', () => {
    (0, vitest_1.it)('should multiply two positive numbers', () => {
        (0, vitest_1.expect)((0, index_1.multiply)(3, 4)).toBe(12);
    });
    (0, vitest_1.it)('should multiply by zero', () => {
        (0, vitest_1.expect)((0, index_1.multiply)(5, 0)).toBe(0);
        (0, vitest_1.expect)((0, index_1.multiply)(0, 5)).toBe(0);
    });
    (0, vitest_1.it)('should multiply negative numbers', () => {
        (0, vitest_1.expect)((0, index_1.multiply)(-2, 3)).toBe(-6);
        (0, vitest_1.expect)((0, index_1.multiply)(-2, -3)).toBe(6);
    });
});
(0, vitest_1.describe)('greet', () => {
    (0, vitest_1.it)('should greet a person by name', () => {
        (0, vitest_1.expect)((0, index_1.greet)('Alice')).toBe('Hello, Alice!');
    });
    (0, vitest_1.it)('should trim whitespace from name', () => {
        (0, vitest_1.expect)((0, index_1.greet)('  Bob  ')).toBe('Hello, Bob!');
    });
    (0, vitest_1.it)('should return default greeting for empty string', () => {
        (0, vitest_1.expect)((0, index_1.greet)('')).toBe('Hello, World!');
    });
    (0, vitest_1.it)('should return default greeting for whitespace only', () => {
        (0, vitest_1.expect)((0, index_1.greet)('   ')).toBe('Hello, World!');
    });
});
//# sourceMappingURL=index.test.js.map