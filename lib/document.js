const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// * this function will take the user input and create a new shape object accordingly
function createShape(text, tcolor, shape, scolor) {
  switch (shape) {
    case 'circle':
      return new Circle(text, tcolor, scolor).render();
      break;
    case 'square':
      return new Square(text, tcolor, scolor).render();
      break;
    case 'triangle':
      return new Triangle(text, tcolor, scolor).render();
      break;
    default:
      throw new Error('Invalid shape');
  }
}

module.exports = { createShape };