// Aliases
const isArray = Array.isArray

// Functions
const compose = (f, g) => (...args) => f(g(...args))
const composeAll = (...fns) => fns.reduce(compose)
const isEmpty = xs => xs.length === 0
const take = n => xs => xs.slice(0, n)
const drop = n => xs => xs.slice(n)
const reverse = xs => xs.slice(0).reverse()
const not = x => !x

export { isArray, compose, composeAll, isEmpty, take, drop, reverse, not }
