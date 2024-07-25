const Shape = require('./shape.js');

class Circle extends Shape {
  constructor(text, tcolor, shape, scolor) {
    super(text, tcolor, scolor);
    this.shape = shape;
  }
  renderCircle() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <circle cx="25" cy="75" r="20" fill="${scolor}"/>
     
     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${tcolor}">${text}</text>

     </svg>
     `
  }
}

module.exports = Circle;