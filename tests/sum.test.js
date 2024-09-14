const { sum } = require('../src/sum')

test('should add two numbers', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-2, -3)).toBe(-5);
});
