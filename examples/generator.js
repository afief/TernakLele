const { generateVisa, generateMaster, validate } = require('../index')

const samples = {
  'visa': generateVisa(),
  'visaWithBIN': generateVisa('465890'),
  'master': generateMaster(),
  'masterWithBIN': generateMaster('552163')
}
const valid = {
  'visa': validate(samples.visa),
  'visaWithBIN': validate(samples.visaWithBIN),
  'master': validate(samples.master),
  'masterWithBIN': validate(samples.masterWithBIN)
}

console.log('Samples', JSON.stringify(samples, null, 4))
console.log('Validity', JSON.stringify(valid, null, 4))
