const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createShape } = require('./document.js');
const Shape = require('./shape.js');

// * this class will be responsible for taking user input and creating a new shape object
class CLI extends Shape {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter some text; No more than 3 characters',
                    validate: function(input) {
                        // Check if the input length is more than 3 characters
                        if (input.length > 3) {
                            // Return an error message
                            return 'Please enter no more than 3 characters.';
                        }
                        // Input is valid
                        return true;
                    }
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
            .then(answers => {
                // * taking the answers from the user and creating a new shape object
                const { text, tcolor, shape, scolor } = answers;
                return writeFile(
                  join(__dirname, '..', 'output', 'logo.svg'),
                  createShape(text, tcolor, shape, scolor)
                );
              })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }
}

module.exports = CLI;