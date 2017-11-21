import flatten from './arrays/flatten'
import { getNumberParts } from './regexp/index'
import { gen, sample, sampleOne } from 'testcheck'

require('jasmine-check').install()

describe('Test Suite', () => {
  describe('strings', () => {
    describe('iterating over strings', () => {
      check.xit('using for-of', () => {
        expect().toEqual()
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

  describe('collections', () => {
    describe('merge', () => {
      check.xit('use spread operator to merge objects into new object', () => {
        expect(merge({})).toEqual({})
      })
    })
  })

  describe('regular expressions', () => {
    describe('getNumberParts', () => {
      check.it('get parts of number before and after "."', () => {
        expect(getNumberParts('1234.56')).toEqual(['1234', '56'])
      })
    })
  })
})
