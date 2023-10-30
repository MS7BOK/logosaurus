class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    render() {
      return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = Circle;
  