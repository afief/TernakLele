/* eslint-env jasmine */

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

describe('Generate Credit Card Number', () => {
  it('should generate visa number', () => {
    expect(validate(samples.visa)).toBe(true)
  })

  it('should generate visa with BIN', () => {
    expect(validate(samples.visaWithBIN)).toBe(true)
  })

  it('should generate master number', () => {
    expect(validate(samples.master)).toBe(true)
  })

  it('should generate master with BIN', () => {
    expect(validate(samples.masterWithBIN)).toBe(true)    
  })
});