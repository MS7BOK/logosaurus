const Triangle = require('../lib/Triangle');

test('renders triangle SVG', () => {
  const triangle = new Triangle(100, 100, 'blue');
  expect(triangle.render()).toContain('<polygon');
});
