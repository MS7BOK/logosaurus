const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');

test('Circle renders circle SVG', () => {
  const circle = new Circle(50, 'red');
  expect(circle.render()).toContain('<circle');
});

test('Square renders square SVG', () => {
  const square = new Square(50, 'green');
  expect(square.render()).toContain('<rect');
});

test('Triangle renders triangle SVG', () => {
  const triangle = new Triangle(100, 100, 'blue');
  expect(triangle.render()).toContain('<polygon');
});









// const Circle = require('../lib/Circle');

// test('renders circle SVG', () => {
//   const circle = new Circle(50, 'red');
//   expect(circle.render()).toContain('<circle');
// });

// const Square = require('../lib/Square');

// test('renders square SVG', () => {
//   const square = new Square(50, 'green');
//   expect(square.render()).toContain('<rect');
// });

// const Triangle = require('../lib/Triangle');

// test('renders triangle SVG', () => {
//   const triangle = new Triangle(100, 100, 'blue');
//   expect(triangle.render()).toContain('<polygon');
// });
