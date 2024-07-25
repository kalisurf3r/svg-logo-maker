class Shape {
    constructor(text, tcolor, scolor) {
        this.text = text;
        this.tcolor = tcolor;
        this.scolor = scolor;
    }
    render() {
        throw new Error('Not implemented');
    }
    
}

module.exports = Shape;