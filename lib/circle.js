const Shape = require('./shape.js');

class Circle extends Shape {
  constructor(text, tcolor, scolor) {
    super(text, tcolor, scolor);
  }
  render() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <circle cx="25" cy="75" r="20" fill="${this.scolor}"/>
     
     <text x="15" y="80" fill="${this.tcolor}">${this.text}</text>

     </svg>
     `;
  }
}

module.exports = Circle;