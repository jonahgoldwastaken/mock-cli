const stringToLowerCase = val => val.toLowerCase()

const stringIsUpperCased = val => val === val.toUpperCase()

const reduceCharArray = (total, val) => {
  if (total.length === 0) return val.toUpperCase()

  let i = total.length - 1
  while (total[i] === ' ') i--
  if (stringIsUpperCased(total[i])) return total.concat(val)
  else return total.concat(val.toUpperCase())
}

const mockifyText = text =>
  text
    .split('')
    .map(stringToLowerCase)
    .reduce(reduceCharArray, '')

const print = text => {
  const mockifiedText = mockifyText(text)
  console.log(mockifiedText)
}

module.exports = mockifyText
module.exports.print = print
