const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('renders triangle', () => {
    const triangle = new Triangle('blue');
    const svgContent = triangle.render();
    expect(svgContent).toEqual('<polygon points="150, 30 270, 170 30, 170" fill="green" />');
  });
});

describe('Circle', () => {
  test('renders circle', () => {
    const circle = new Circle('green');
    const svgContent = circle.render();
    expect(svgContent).toEqual('<circle cx="150" cy="100" r="70" fill="blue" />');
  });
});

describe('Square', () => {
  test('renders square', () => {
    const square = new Square('red');
    const svgContent = square.render();
    expect(svgContent).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});