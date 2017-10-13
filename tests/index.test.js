const creaditCardGenerator = require('../index');


test('no valid creadit cards', () => {
  let noValidCases = [
    null,
    "xxxx-xxxxx-xxxxxx-xxxxx",
    "abc1234",
    "233aa",
    12312312
  ];
  for (var index in noValidCases) {
    expect(creaditCardGenerator.validate(noValidCases[index])).toBeFalsy();
  }

})