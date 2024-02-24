const { Triangle, Circle, Square } = require('./shapes');

class LogoGenerator {
  constructor({ text, textColor, shape, shapeColor }) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  generateLogo() {
    const shape = this.createShape();
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
        </svg>
    `;
    return svgContent;
}

  createShape() {
    switch (this.shape) {
      case 'circle':
        return new Circle(this.shapeColor, this.text, this.textColor);
      case 'triangle':
        return new Triangle(this.shapeColor, this.text, this.textColor);
      case 'square':
        return new Square(this.shapeColor, this.text, this.textColor);
      default:
        throw new Error('Invalid shape');
    }
  }
}

module.exports = { LogoGenerator };
