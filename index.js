// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What does your application do?',
    'How do you install this application',
    'How is this application intended to be used?',
    'What license did you use?',
    'Are there contribution guidelines for this application?',
    'How do you test your application?',
    'What is your GitHUb username?',
    'What is the URL for your GitHub profile?',
    'What is your email address?',
    'Are there any contributors to this project?',

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data), (err) => {
        if (err) {
            return console.log(err); 
        }
        console.log('Your file has been successfully written to README.md');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
           type: 'input',
            name: 'title',
            message: questions[0], 
        },
        {
            type: 'input',
            name: 'title',
            message: questions[1], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[2], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[3], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[4], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[5], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[6], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[7], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[8], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[9], 
         },
         {
            type: 'input',
            name: 'title',
            message: questions[10], 
         },
    ]).then((data) =>
    writeToFile("ReadMe.md", data)
    )
}

// Function call to initialize app
init();
