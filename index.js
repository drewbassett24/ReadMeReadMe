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
    'What is your email address?',

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
            name: 'purpose',
            message: questions[1], 
         },
         {
            type: 'input',
            name: 'install',
            message: questions[2], 
         },
         {
            type: 'input',
            name: 'usage',
            message: questions[3], 
         },
         {
            type: 'list',
            name: 'license',
            choices: ["Apache 2.0 License", "MIT License", "GPLv3 License"],
            message: questions[4], 
         },
         {
            type: 'input',
            name: 'contributing',
            message: questions[5], 
         },
         {
            type: 'input',
            name: 'testing',
            message: questions[6], 
         },
         {
            type: 'input',
            name: 'username',
            message: questions[7], 
         },
         {
            type: 'input',
            name: 'email',
            message: questions[8], 
         },
         
    ]).then((data) =>{
      console.log(data);
      writeToFile("README.md", data);
     })
}

// Function call to initialize app
init();
