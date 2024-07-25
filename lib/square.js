const Shape = require('./shape.js');

class Square extends Shape {
  constructor(text, tcolor, scolor) {
    super(text, tcolor, scolor);
  }
  render() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <rect x="10" y="10" width="30" height="30" fill="${this.scolor}"/>
     
     <text x="40" y="45" fill="${this.tcolor}">${this.text}</text>
     
     </svg>
     `;
  }
}

module.exports = Square;