const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createShape } = require('./document.js');
const Shape = require('./shape.js');

class CLI extends Shape {
    constructor(text, tcolor, shape, scolor, children = []) {
        super(text, tcolor, shape, scolor, children);
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter some text; No more than 3 characters',
                },
                {
                    type: 'input',
                    name: 'tcolor',
                    message: 'Enter the text color',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape',
                    choices: ['square', 'circle', 'triangle'],
                },
                {
                    type: 'input',
                    name: 'scolor',
                    message: 'Enter the shape color',
                },
            ])
            .then(({text, tcolor, shape, scolor}) => {
                const newShape = createShape(text, tcolor, shape, scolor);
                return newShape;
            })
            .then(shape => {
                // const shapeSVG = shape.renderXML();
                const filePath = join(__dirname, '..', 'output', 'logo.svg');
                return writeFile(filePath, shape);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }
}

module.exports = CLI;