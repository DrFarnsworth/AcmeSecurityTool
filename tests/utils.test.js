const utils = require('../src/utils');

test('Log should print message', () => {
  console.log = jest.fn();
  utils.log('Test message');
  expect(console.log).toHaveBeenCalledWith('[LOG]: Test message');
});
