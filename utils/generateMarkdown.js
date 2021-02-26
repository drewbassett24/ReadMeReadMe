// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT License':
        return '[!MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://1besson.mit-license.org/)';
      case 'Apache 2.0 License':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPLv3 License':
        return '[!GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
      default: "";
        break;

    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case 'MIT License':
        return '\n\n> This project was created under the standard MIT license. \n\n[Learn more about this license.](https://lbesson.mit-license.org/)';
      case 'Apache 2.0 License':
        return '\n\n> This project was created under the Apache License, Version 2.0\n\n[Learn more about this license.](https://www.apache.org/licenses/LICENSE-2.0)';
      case 'GPLv3 License':
        return '\n\n> This project was created under the GNU General Public License.\n\n[Learn more about this license.]](http://lbesson.mit-license.org/)';
      default: "";
        break;

    }
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "Other") {
    let licenseType = "## License\n\n" + renderLicenseBadge(license) + renderLicenseLink(license);
    return licenseType;
  }
  else {
    "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description
$(data.description)

## Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Testing](#Testing)
* [Credits](#Credits)
* [License] (#License)
* [Questions] (#Questions?)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributing}

## Testing

${data.test}

## Credits

${data.credits}

## Questions?

If you have any questions, you can contact me on the links below. Or if you just want to see my other projects!

My GitHub username is ${data.github}

Link to GitHub Profile: ${data.gitUrl}

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
