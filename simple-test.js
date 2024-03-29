const { plus100 } = require('./index')

const { plus100 } = require('./index')

// Test with zero input
console.assert(plus100(0) === 100, 'Zero input test failed')

// Test with a small positive input
console.assert(plus100(10) === 110, 'Small positive input test failed')

// Test with a large positive input
console.assert(plus100(10000) === 10100, 'Large positive input test failed')

// Test with a small negative input
console.assert(plus100(-10) === 90, 'Small negative input test failed')

// Test with a large negative input
console.assert(plus100(-10000) === -9900, 'Large negative input test failed')

// Test with maximum safe integer input
console.assert(plus100(Number.MAX_SAFE_INTEGER) === Number.MAX_SAFE_INTEGER + 100, 'Maximum safe integer input test failed')

// Test with minimum safe integer input
console.assert(plus100(Number.MIN_SAFE_INTEGER) === Number.MIN_SAFE_INTEGER + 100, 'Minimum safe integer input test failed')

console.info('Simple test passed')
