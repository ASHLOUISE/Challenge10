class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this._textColor = textColor;
  }

  render() {
    throw new Error('Method not implemented');
  }

  get textColor() {
    return this.isDarkColor(this._textColor) ? 'white' : 'black';
  }

  isDarkColor(textColor) {
    if (!textColor) {
      console.error('Invalid textColor:', textColor);
      return false;
    }

    const hex = textColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b);
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) {
      console.error('Invalid hex color code:', textColor);
      return false;
    }
    const r = parseInt(rgb[1], 16);
    const g = parseInt(rgb[2], 16);
    const b = parseInt(rgb[3], 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance < 0.5;
  }

}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `
        
          <polygon points="150, 30 270, 170 30, 170" fill="${this.color}" />
          <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this._textColor}">${this.text}</text>
        
      `;
  }
}

class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `
        
          <circle cx="150" cy="100" r="70" fill="${this.color}" />
          <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this._textColorextColor}">${this.text}</text>
      
      `;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `
      
        <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
        <text x="150" y="150" text-anchor="middle" alignment-baseline="middle" fill="${this._textColor}">${this.text}</text>
      
    `;
  }
}

module.exports = { Triangle, Circle, Square };
