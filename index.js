const _ = require('lodash')

const length = 16

/*
 * Generate Credit Card
 * Default to Visa
 *
 * @param {string} bin : Prefix / BIN Number
 */
const generate = function (bin = '4') {
  const randomLength = length - (bin.length + 1)

  let result = bin
  for (let i = 0; i < randomLength; i++) {
    let digit = _.random(0, 9)
    result = `${result}${digit}`
  }

  let checkDigit = getLuhnChecksum(result)
  result = `${result}${checkDigit}`

  // add space per four digit
  return result.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').slice(0, -1)
}

/*
 * Luhn algorithm
 *
 * @param {string} number : CC Number
 */
const getLuhnChecksum = function (number) {
  let sum = 0
  let lenOffset = (length + 1) % 2
  for (let pos = 0; pos < length - 1; pos++) {
    if ((pos + lenOffset) % 2) {
      let t = parseInt(number[pos]) * 2
      if (t > 9) {
        t -= 9
      }
      sum += t
    } else {
      sum += parseInt(number[pos])
    }
  }
  return (10 - (sum % 10)) % 10
}

/*
 * Validate Credit Card Number
 * @param {string} credit card number
 * @return {boolean} validity
 */
function validate (number) {
  console.log(number);
  number = number.replace(/[\s+|.|-]/g, '')

  var checksum = 0
  for (let i = (2 - (number.length % 2)); i <= number.length; i += 2) {
    checksum += parseInt(number.charAt(i - 1), 10)
  }

  for (let i = (number.length % 2) + 1; i < number.length; i += 2) {
    var digit = parseInt(number.charAt(i - 1), 10) * 2
    if (digit < 10) {
      checksum += digit
    } else {
      checksum += (digit - 9)
    }
  }
  
  if ((checksum % 10) === 0) {
    return true
  } else {
    return false
  }
}

const generateVisa = () => generate('4')
const generateMaster = () => generate(_.random(50, 55).toString())

module.exports = {
  generate,
  generateVisa,
  generateMaster,
  validate
}
