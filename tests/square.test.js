const Square = require('../lib/Square');

test('renders square SVG', () => {
  const square = new Square(50, 'green');
  expect(square.render()).toContain('<rect');
});
