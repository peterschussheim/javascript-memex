import flatten from './arrays/flatten'
import { gen, sample, sampleOne } from 'testcheck'
require('jasmine-check').install()

console.log(sample(gen.asciiString))

describe('Test Suite', () => {
  describe('strings', () => {
    describe('iterating over strings', () => {
      check.it('using for-of', gen.str, x => {
        expect(x).toEqual(x)
      })
    })
  })
  describe('arrays', () => {
    describe('flatten', () => {
      test('flatten subarrays one level deep into single array', () => {
        expect(flatten([[0, 1], [2, 3], [4, 5]])).toEqual([0, 1, 2, 3, 4, 5])
      })
      test('flatten nested subarrays into single array', () => {
        expect(flatten([1, 2, [3, 4, [5, 6, 7], 8], 9])).toEqual([
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ])
      })
    })
  })
})
