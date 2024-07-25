const Circle = require('../lib/circle.js');

describe('Circle', () => {
    test('should create a new Circle object', () => {
        const circle = new Circle('circle', 'black', 'red');
        expect(circle.text).toBe('circle');
        expect(circle.tcolor).toBe('black');
        expect(circle.scolor).toBe('red');
    });
    
    test('should render a circle', () => {
        const circle = new Circle('circle', 'black', 'red');
        const expectedSvg = `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="75" r="20" fill="red"/>
            <text x="15" y="80" fill="black">circle</text>
          </svg>
        `;
        expect(circle.render().replace(/\s+/g, '')).toBe(expectedSvg.replace(/\s+/g, ''));
      });
    });