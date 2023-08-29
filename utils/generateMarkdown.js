// TODO: Create a function that returns a license badge based on which license is passed in
// function renderLicenseBadge(license) { }
const renderLicenseBadge = (license) => {
  // If there is no license, return an empty string
  if (data.license === `None` || `Other`) {
    return ``;
  } else {
    // What does it mean to render a license badge?
    renderLicenseLink();
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  // If there is no license, return an empty string
  if (data.license === `None` || `Other`) {
    return ``;
  } else {
    // Where do I find this info?
    renderLicenseSection();
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  // If there is no license, return an empty string
  if (data.license === `None` || `Other`) {
    return ``;
  } else {
    generateMarkdown();
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits
  
  ${data.contributors}

  ## Tests
  
  ${data.tests}

  ## License
  
  ${data.license}

  ## Additional Questions

  github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
