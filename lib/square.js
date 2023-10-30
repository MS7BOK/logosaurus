class Square {
  constructor(sideLength, color, text, textColor) {
    this.sideLength = sideLength;
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    const svgString = `<svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
      <text x="10" y="${this.sideLength / 2}" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    return svgString;
  }
}

module.exports = Square;
