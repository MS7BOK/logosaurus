const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');

async function generateLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: function(input) {
          return input.length > 0 && input.length <= 3 ? true : 'Please enter 1 to 3 characters.';
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal number):'
      },
      {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['circle', 'square', 'triangle']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal number):'
      }
    ]);

    // Inside generateLogo() function
let shape;
switch (userInput.shapeType) {
  case 'circle':
    shape = new Circle(50, userInput.shapeColor, userInput.text, userInput.textColor);
    break;
  case 'square':
    shape = new Square(50, userInput.shapeColor, userInput.text, userInput.textColor);
    break;
  case 'triangle':
    shape = new Triangle(100, 100, userInput.shapeColor, userInput.text, userInput.textColor);
    break;
  default:
    console.error('Invalid shape type');
    return;
}


    const svgContent = shape.render();

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo();
