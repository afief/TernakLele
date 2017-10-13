const creaditCardGenerator = require('../index');


test('no valid creadit cards', () => {
  let noValidCases = [
    "xxxx-xxxxx-xxxxxx-xxxxx",
    "abc1234",
    "233aa",
  ];
  for (var index in noValidCases) {
    expect(creaditCardGenerator.validate(noValidCases[index])).toBeFalsy();
  }

})