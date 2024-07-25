const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    test('should create a new Triangle object', () => {
        const triangle = new Triangle('triangle', 'black', 'red');
        expect(triangle.text).toBe('triangle');
        expect(triangle.tcolor).toBe('black');
        expect(triangle.scolor).toBe('red');
    });
    
    test('should render a triangle', () => {
        const triangle = new Triangle('triangle', 'black', 'red');
        const expectedSvg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <polygon points="50 15, 100 100, 0 100" fill="red"/>
     <text x="40" y="80" fill="black">triangle</text>
     </svg>
     `;
        expect(triangle.render().replace(/\s+/g, '')).toBe(expectedSvg.replace(/\s+/g, ''));
      });
    });