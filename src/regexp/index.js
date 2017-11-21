// https://github.com/mjavascript/practical-modern-javascript/blob/master/ch09.asciidoc

export function getNumberParts(number) {
  const regNumber = /(\d+)\.(\d+)/
  const matches = number.match(regNumber)

  if (matches === null) return null

  const [, ...captures] = number.match(regNumber)
  return captures
}
