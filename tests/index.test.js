const creaditCardGenerator = require('../index');


test('no valid creadit cards', () => {
  let noValidCases = [
    null,
    "xxxx-xxxxx-xxxxxx-xxxxx",
    "abc1234",
    "233aa"
  ];
  for (var noValidCase in noValidCases) {
    expect(creaditCardGenerator.validate(noValidCase)).toBeFalsy();
  }

})