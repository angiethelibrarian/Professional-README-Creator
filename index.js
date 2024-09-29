// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import generateMarkdown from "./utils/generateMarkdown.js"
import fs from 'fs';

// Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is the title of your project?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is the license for your project?',
      choices: ['Apache 2.0', 'BSD-2-Clauses', 'CC', 'GPL v3', 'MIT'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md has been generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            let generatedContent = generateMarkdown(answers);
            writeToFile('README.md', generatedContent.join("\n\n"));
        })
        .catch(err => {
            console.error(err);
        });
}

init();
