const Square = require('../lib/square.js');

describe('Square', () => {
    test('should create a new Square object', () => {
        const square = new Square('square', 'black', 'red');
        expect(square.text).toBe('square');
        expect(square.tcolor).toBe('black');
        expect(square.scolor).toBe('red');
    });
    
    test('should render a square', () => {
        const square = new Square('square', 'black', 'red');
        const expectedSvg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <rect x="10" y="10" width="30" height="30" fill="red"/>
     <text x="40" y="45" fill="black">square</text>
     </svg>
     `;
        expect(square.render().replace(/\s+/g, '')).toBe(expectedSvg.replace(/\s+/g, ''));
      });
    });