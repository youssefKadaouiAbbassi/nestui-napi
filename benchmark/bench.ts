import b from 'benny'

import { plus100 } from '../index'

function add(a: number) {
  return a + 100
}

async function run() {
  await b.suite(
    'Add 100',

    // Benchmark test for small positive input
    b.add('Native plus100 with small positive input', () => {
      plus100(10)
    }),

    // Benchmark test for large positive input
    b.add('Native plus100 with large positive input', () => {
      plus100(10000)
    }),

    // Benchmark test for zero input
    b.add('Native plus100 with zero input', () => {
      plus100(0)
    }),

    // Benchmark test for small negative input
    b.add('Native plus100 with small negative input', () => {
      plus100(-10)
    }),

    // Benchmark test for large negative input
    b.add('Native plus100 with large negative input', () => {
      plus100(-10000)
    }),

    // JavaScript implementation for comparison
    b.add('JavaScript a + 100', () => {
      add(10)
    }),

    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
