import inquirer from "inquirer";
import fs from "fs/promises";

const {
  title,
  description,
  installation,
  usage,
  license,
  contributor,
  test,
  github,
  email,
} = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "what is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "please write a brief description.",
  },
  {
    type: "input",
    name: "installation",
    message: "how do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "how is your project used?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "which of these license is applicable to your repo?",
    choices: ["APACHE", "TOMCAST", "MIDDLEWARE", "MIT", "NONE"],
  },
  {
    type: "input",
    name: "contributor",
    message: "please list contributors?",
  },
  {
    type: "input",
    name: "test",
    message: "require test? please provide a walkthrough for tests.",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github user name?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },
]);
const gitHubUser = `https://github.com/${github}`
//const licenseShield = `![GitHub](https://img.shields.io/github/license/${github}/${title}?style=for-the-badge)`

const readMe = `
  # ${title}
## Description
${description}
## Table Of Contents
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [license](#License)
 * [Contributor](#Contributor)
 * [Test](#Test)
 * [Questions](#Questions)
 
## Installation
${installation}
## How is your project used?
${usage}
## license
${license}
## Contributors
${contributor}
## Tests
${test}
## Questions
Any questions about this project please send me a message on <a href="${gitHubUser}">${github}</a> or email me at [${email}](mailto:${email})
`;
await fs.writeFile("README.md", readMe);
