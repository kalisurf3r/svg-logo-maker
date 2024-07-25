class Shape {
    constructor(text, tcolor, shape, scolor, children = []) {
        this.text = text;
        this.tcolor = tcolor;
        this.shape = shape;
        this.scolor = scolor;
        this.children = children;
    }
    render() {
        throw new Error('Not implemented');
    }
    renderXML() {
        return this.children
          .map((child) => {
            if (typeof child === 'string') {
              return child;
            }
            return child.render();
          })
          .join('');
      }
}

module.exports = Shape;