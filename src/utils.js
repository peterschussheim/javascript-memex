const foldl = f => acc => xs => xs.reduce(uncurry(f), acc)
const isArray = Array.isArray

export { isArray }
