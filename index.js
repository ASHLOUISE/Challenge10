const inquirer = require('inquirer');
const fs = require('fs');
const { LogoGenerator } = require('./lib/logoGenerator');

const startApp = async () => {
    try {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text for the logo (up to three characters):'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (keyword or hexadecimal):'
            }
        ]);

        const logoGenerator = new LogoGenerator(userInput);
        const svgContent = logoGenerator.generateLogo();
        const filename = './examples/logo.svg';
        fs.writeFileSync(filename, svgContent);
        console.log(`Generated ${filename}`);
    } catch (error) {
        console.error('Error:', error);
    }
};

startApp();
