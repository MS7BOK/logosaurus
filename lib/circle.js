class Circle {
  constructor(radius, color, text, textColor) {
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.textColor = textColor; // Store the text color property
  }

  render() {
    const svgString = `<svg width="${2 * this.radius}" height="${2 * this.radius}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
      <text x="${this.radius - 10}" y="${this.radius + 5}" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    return svgString;
  }
}

module.exports = Circle;
