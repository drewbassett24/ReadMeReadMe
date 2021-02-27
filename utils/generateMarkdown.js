// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch (license) {
      case 'MIT License':
        return '[!MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://1besson.mit-license.org/)';
      case 'Apache 2.0 License':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPLv3 License':
        return '[!GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
      default:
        return "";
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    switch (license) {
      case 'MIT License':
        return '\n\n> This project was created under the standard MIT license. \n\n[Learn more about this license.](https://lbesson.mit-license.org/)';
      case 'Apache 2.0 License':
        return '\n\n> This project was created under the Apache License, Version 2.0\n\n[Learn more about this license.](https://www.apache.org/licenses/LICENSE-2.0)';
      case 'GPLv3 License':
        return '\n\n> This project was created under the GNU General Public License.\n\n[Learn more about this license.]](http://lbesson.mit-license.org/)';
      default: 
        return "";
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "Other") {
    return renderLicenseLink(license);
  }
  else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.purpose}

## Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Testing](#Testing)
* [License](#License)
* [Questions](#Questions?)

## Installation

${data.install}

## Usage

${data.usage}

## Contributions

${data.contributing}

## Testing

${data.testing}

## License

${renderLicenseSection(data.license)}

## Questions?

If you have any questions, you can contact me on the links below. Or if you just want to see my other projects!

My GitHub: [@${data.username}](https://github.com/${data.username})

My Email: ${data.email}

`;
}

module.exports = generateMarkdown;
