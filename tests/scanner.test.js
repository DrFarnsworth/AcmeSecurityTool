const scanner = require('../src/scanner');

test('Scan should complete successfully', () => {
  expect(scanner.scan()).toBeUndefined();
});
