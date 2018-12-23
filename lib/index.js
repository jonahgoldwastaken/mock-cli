const mapToLowerCase = val => val.toLowerCase()

const mapCharArray = (total = '', val) => {
  if (!total.length) return val
  else if (total[total.length - 1] === total[total.length - 1].toUpperCase())
    return total.concat(val)
  else if (Math.random() < 0.8) return total.concat(val.toUpperCase())
  else return total.concat(val)
}

const mockifyText = text =>
  text
    .split('')
    .map(mapToLowerCase)
    .reduce(mapCharArray)

const print = text => {
  const mockifiedText = mockifyText(text)
  console.log(mockifiedText)
}

module.exports = mockifyText
module.exports.print = print
