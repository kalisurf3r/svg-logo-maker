const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor(text, tcolor, scolor) {
    super(text, tcolor, scolor);
  }
  render() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <polygon points="50 15, 100 100, 0 100" fill="${this.scolor}"/>
     
     <text x="40" y="80" fill="${this.tcolor}">${this.text}</text>

     </svg>
     `;
  }
}

module.exports = Triangle;