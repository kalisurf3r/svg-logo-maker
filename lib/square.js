const Shape = require('./shape.js');

class Square extends Shape {
  constructor(text, tcolor, shape, scolor) {
    super(text, tcolor, scolor);
    this.shape = shape;
  }
  renderSquare() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <rect x="10" y="10" width="30" height="30" fill="${scolor}"/>
     
     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${tcolor}">${text}</text>
     
     </svg>
     `
  }
}

module.exports = Square;