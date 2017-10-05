const { generateVisa, generateMaster } = require('../index')

const samples = {
  'visa': generateVisa(),
  'visaWithBIN': generateVisa('465890'),
  'master': generateMaster(),
  'masterWithBIN': generateMaster('552163')
}

console.log(JSON.stringify(samples, null, 4))
