const Circle = require('../lib/Circle');

test('renders circle SVG', () => {
  const circle = new Circle(50, 'red');
  expect(circle.render()).toContain('<circle');
});
