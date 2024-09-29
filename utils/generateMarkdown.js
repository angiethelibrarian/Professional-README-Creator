// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  switch(license) {
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
    case "BSD-2-Clauses":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]"
    case "CC":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]"
    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    default: 
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  switch(license) {
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
    case "BSD-2-Clauses":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]"
    case "CC":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]"
    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    default: 
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let titleElement = generateTitle(data.title);
  let descriptionElement = generateDescription(data.description);
  let installationElement = generateInstallation(data.installation);
  let usageElement = generateUsage(data.usage);
  let contributingElement = generateContributing(data.contributing);
  let questionsElement = generateQuestionsSection(data.github, data.email);
  let tableofcontentsElement = generateTableOfContents(data.tableofcontents);
  let licenseBadgeElement = renderLicenseBadge(data.license);

  return [titleElement, licenseBadgeElement, tableofcontentsElement, descriptionElement, installationElement, usageElement, contributingElement, questionsElement];
}

function generateTableOfContents(tableofcontentsText) {
  const tableOfContentsList = [
    "- [Installation](#installation)",
    "- [Usage](#usage)",
    "- [Contributing](#contributing)",
    "- [Questions](#questions)",
    "- [Tests](#tests)"
  ]
  return `## Table of Contents\n\n${tableOfContentsList.join("\n")}`;
}

//WHEN I enter my project title THEN this is displayed as the title of the README
function generateTitle(titleText) {
  if (!titleText) {
    return '';
  }
  return `# ${titleText}`;
}

//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions 
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

//description
function generateDescription(descriptionText) {
  return `## Description\n\n${descriptionText}`;
}

//installation
function generateInstallation(installationText) {
  return `## Installation\n\n${installationText}`;
}

//usage
function generateUsage(UsageText) {
  return `## Usage\n\n${UsageText}`;
}

//contributing
function generateContributing(contributingText) {
  return `## Contributing\n\n${contributingText}`;
}

//tests
function generateTests(testText) {
  return `## Test\n\n${testText}`;
}


//WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
function generateQuestionsSection(github, email) {
  if (!github && !email) {
    return '';
  }

  let questionsSectionContent = ['## Questions'];
  if (github) {
    questionsSectionContent.push(`You can find more of my work at [${github}](https://github.com/${github}).`);
  }
  

  //WHEN I enter my email address THEN this is added to the section of the README entitled Questions, 
  //with instructions on how to reach me with additional questions
  if (email) {
    questionsSectionContent.push(`If you have any questions, you can reach me at [${email}](mailto:${email}).`);
  }
  return questionsSectionContent.join('\n\n');

}

export default generateMarkdown;