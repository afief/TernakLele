const creaditCardGenerator = require('../index');


test('no valid credit cards', () => {
  let noValidCases = [
    "xxxx-xxxxx-xxxxxx-xxxxx",
    "abc1234",
    "233aa",
  ];
  for (var index in noValidCases) {
    expect(creaditCardGenerator.validate(noValidCases[index])).toBeFalsy();
  }
})

test('Error credit cards', () => {
  let errorCases = [
    null,
    1234,
  ];
  for (var index in errorCases) {
    expect(() => {creaditCardGenerator.validate(errorCases[index])}).toThrow();
  }
})