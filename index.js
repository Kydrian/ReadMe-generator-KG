// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs/promises');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');

// we created an array of questions that the terminal will ask the user. 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'MIT',
            'Apache-2.0',
            'Eclipse',
            'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },

];


// TODO: Create a function to write README file
// the write to file has ternary operator syntax that will throw an error if file name and data is wrong.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("success!")
    });
}

// TODO: Create a function to initialize app

function init() {
    // Log a message indicating the start of the application
    console.log('starting CLI app...');

    inquirer.prompt(questions).then((responses) => {
        // Log the responses to the console for debugging purposes
        console.log(responses);
        writeToFile('README.md', generateMarkdown(responses))
        // Write the generated markdown content to a README.md file
    })
}

// Function call to initialize app
init();

