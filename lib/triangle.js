const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor(text, tcolor, shape, scolor) {
    super(text, tcolor, scolor);
    this.shape = shape;
  }
  renderTriangle() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <polygon points="50 15, 100 100, 0 100" fill="${scolor}"/>
     
     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${tcolor}">${text}</text>

     </svg>
     `
  }
}

module.exports = Triangle;