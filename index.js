// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
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
    message: 'Re-enter password to confirm:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Choose a license for your application:',
    name: 'license',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  }
// End of array of questions
];


inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
