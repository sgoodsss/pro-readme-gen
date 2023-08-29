// TODO: Include packages needed for this application
// Need to also use GitHub Rest API for license info????
// Inquirer
const inquirer = require('inquirer');
// Axios- Do I need this?
const axios = require("axios");
// Generate Markdown JS File
const generateMarkdown = require('./utils/generateMarkdown.js');
// File System
const fs = require('fs');
// Async promises
const asyncFS = require('fs/promises');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => {
            if (!titleInput) {
                console.log(`Please enter your title!`)
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.  If you followed tutorials, include links to those here as well.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Write tests for your application. Provide examples on how to run them.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license for your application:',
        choices: [`MIT`, `GPLv2`, `Apache`, `GPLv3`, `Other`, `None`],
        name: 'license',
        validate: licenseInput => {
            if (!licenseInput) {
                console.log(`Please select a license!`)
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        validate: githubInput => {
            if (!githubInput) {
                console.log(`Please enter your GitHub username!`)
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: emailInput => {
            if (!emailInput) {
                console.log(`Please enter your email!`)
                return false;
            } else {
                return true;
            }
        },
    }
    // End of array of questions
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    // Async Promise
    return async function writeREADMEFile() {
        try {
            // how do I change this to the answers from the poll
            console.log(`Writing Read Me`)
            const content = 'Some content!';
            await fs.writeFile('./files/generated-README.md', content);
        } catch (err) {
            console.log(err);
        }
    }
    writeREADMEFile();
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
        // Uses Questions Array
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            return writeToFile(answers);
            // Want to include function above to write README file here
            // writeToFile(answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error
            }
        });
}

// Function call to initialize app
init()
    .then(answers => {
        console.log(answers)
    })

// How do I connect my two js pages?