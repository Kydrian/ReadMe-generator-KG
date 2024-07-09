// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
if (!license || license === 'none') {
  return ''; // this checks if the license the user entered is = none. if so then it will return an empty string
}

const badges = {
  'MIT': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
  'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
  'Eclipse': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]'
//these are the links to the license badges 
}

return badges[license];

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if (!license || license === 'None') {
  return ''; // this checks if the license entered is none, if so then it will return an empty string
}

const links = { // these are the links to the license websites.
  'MIT': 'https://opensource.org/licenses/MIT',
  'Eclipse': 'https://opensource.org/licenses/EPL-1.0',
  'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0'
};

return links[license];
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (!license || license === 'None') {
    return '';
  }

  return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
  
  ## Badges
   ${renderLicenseBadge(license)}`
  
}

// TODO: Create a function to generate markdown for README
// we used a professional readme template as a mockup. The data entered in the npm will be dynamically entered here.
function generateMarkdown(data) {
  return `# ${data.title}

  ##Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Contribution
${data.contributing}

## Usage
${data.usage}

${renderLicenseSection(data.license)}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Question
If you have any questions, this is my github profile and email for you to contact me.
GitHub: [https://github.com/${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;

}

module.exports = generateMarkdown;
// this file will be exported