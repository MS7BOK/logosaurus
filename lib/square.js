class Square {
    constructor(side, color) {
      this.side = side;
      this.color = color;
    }
  
    render() {
      return `<svg width="300" height="200">
        <rect width="${this.side}" height="${this.side}" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = Square;
  