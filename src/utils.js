// Aliases
const isArray = Array.isArray

// Functions
const compose = (f, g) => (...args) => f(g(...args))
const composeAll = (...fns) => fns.reduce(compose)

export { isArray, compose, composeAll }
