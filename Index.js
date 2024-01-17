const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square} = require('./Shape');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => input.length > 0 && input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
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
        message: 'Enter shape color (keyword or hex):',
    },
]).then(answers => {
    console.log(answers);

    if (answers.shape === 'circle') {
        const circle = new Circle(answers.shapeColor);
        console.log(circle.render());
        const renderedCircle = circle.render();

        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderedCircle}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>
`
fs.writeFileSync('output.svg', svg);

    }else if (answers.shape === 'square') {

        const square = new Square(answers.shapeColor);
        //console.log(circle.render());
        const renderedSquare = square.render();

        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderedSquare}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>
`
fs.writeFileSync('output.svg', svg);
    }
}


);