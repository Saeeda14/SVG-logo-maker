// importing required modules 
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes'); 

// function for user input 
async function promptUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'input', 
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => input.length <= 3, 
        }, 
        {
            type: 'input', 
            name: 'textColor',
            message: 'Enter text color (keywork or a hexadecimal number)',
        }, 
        {
            type: 'list', 
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'], 
        }, 
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal number):',
        },
    ]);

    // destructuring user input
    const { text, textColor, shape, shapeColor } = userInput; 
    const svgElements = []; 

    // create an object of the right shape
    switch (shape){
        case 'circle':
            const circle = new Circle(shapeColor); 
            svgElements.push(circle.render());
            break; 
        case 'triangle':
            const triangle = new Triangle(shapeColor);
            svgElements.push(triangle.render());
            break; 
        case 'square':
            const square = new Square(shapeColor);
            svgElements.push(square.render());
            break; 
        default:
            break; 
    }

    // create SVG content by combining text and shape elements 
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgElements.join('\n')}
    <text x="10" y="30" fill="${textColor}">${text}</text>
    </svg>`;

    // write SVG content to a file (logo.svg) in the examples folder 
    fs.writeFileSync('./examples/logo.svg', svgContent);

    // log message in console when file created 
    console.log('Generated examples/logo.svg')

}

promptUser();
