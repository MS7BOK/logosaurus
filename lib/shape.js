class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  module.exports = Shape;

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
  
class Triangle {
    constructor(base, height, color) {
      this.base = base;
      this.height = height;
      this.color = color;
    }
  
    render() {
      return `<svg width="300" height="200">
        <polygon points="150,50 100,150 200,150" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = Triangle;
  