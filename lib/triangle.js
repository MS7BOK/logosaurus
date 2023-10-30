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
  