import { isArray } from '../utils'

export default function flatten(array) {
  return array.reduce(
    (acc, cur) => acc.concat(isArray(cur) ? flatten(cur) : cur),
    []
  )
}
