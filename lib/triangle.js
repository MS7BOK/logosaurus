class Triangle {
  constructor(base, height, color, text, textColor) {
    this.base = base;
    this.height = height;
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    const svgString = `<svg width="${this.base}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,${this.height} ${this.base},${this.height} ${this.base / 2},0" fill="${this.color}" />
      <text x="10" y="${this.height / 2}" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    return svgString;
  }
}

module.exports = Triangle;
