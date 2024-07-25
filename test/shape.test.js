const Shape = require('../lib/shape.js');

describe('Shape', () => {
    test('should create a new Shape object', () => {
        const shape = new Shape('shape', 'black', 'red');
        expect(shape.text).toBe('shape');
        expect(shape.tcolor).toBe('black');
        expect(shape.scolor).toBe('red');
    });
    });