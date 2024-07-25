const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createShape(text, tcolor, shape, scolor) {
  switch (shape) {
    case 'circle':
      return new Circle(text, tcolor, shape, scolor);
    case 'square':
      return new Square(text, tcolor, shape, scolor);
    case 'triangle':
      return new Triangle(text, tcolor, shape, scolor);
    default:
      throw new Error('Invalid shape');
  }
}

module.exports = { createShape };