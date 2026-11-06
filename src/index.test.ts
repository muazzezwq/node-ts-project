import { describe, it, expect } from 'vitest'
import { add, multiply, greet } from './index'

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('should add negative numbers', () => {
    expect(add(-2, -3)).toBe(-5)
  })

  it('should add positive and negative numbers', () => {
    expect(add(5, -3)).toBe(2)
  })

  it('should add zero', () => {
    expect(add(0, 5)).toBe(5)
    expect(add(5, 0)).toBe(5)
  })
})

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 5)).toBe(0)
  })

  it('should multiply negative numbers', () => {
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(-2, -3)).toBe(6)
  })
})

describe('greet', () => {
  it('should greet a person by name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!')
  })

  it('should trim whitespace from name', () => {
    expect(greet('  Bob  ')).toBe('Hello, Bob!')
  })

  it('should return default greeting for empty string', () => {
    expect(greet('')).toBe('Hello, World!')
  })

  it('should return default greeting for whitespace only', () => {
    expect(greet('   ')).toBe('Hello, World!')
  })
})