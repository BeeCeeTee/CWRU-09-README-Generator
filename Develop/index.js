// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        type: "input",
        name: "contrib",
        message: "If you would like other developers to contribute to your project, describe some contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide some examples of tests which can be performed for your project and how to run them:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
