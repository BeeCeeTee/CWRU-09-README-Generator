// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "descrip",
        message: "Briefly describe your project:"
    },
    {
        type: "input",
        name: "install",
        message: "Describe the steps required to install and run your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license:",
        choices: ["MIT", "Apache 2.0", "GNU GPL v3", "Mozilla Public 2.0", "BSD 3-Clause", "None"]
    },
    {
        type: "input",
        name: "contrib",
        message: "If you would like other developers to contribute to your project, describe some contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide some examples of tests which can be performed for your project and how to run them:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Finally, what's a good email address to reach you at?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('README.md generated.')
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(() => {
        writeToFile();
})}

// Function call to initialize app
init();
