const inquirer = require('inquirer');
const fs = require('fs');


const outputData = ({project, license, description, installation, usage, contributers, testinstructions, github}) => {
return `# ${project}

## Description
        ${description}

## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributions](#contributions)
        * [Tests](#tests)
        * [Questions](#questions)
        
## Installation
        ${installation}

## Usage
        ${usage}

## License
        This project is licensed under the ${license} license.

## Contributing
        ${contributers}

## Tests
        ${testinstructions}

## Questions
        If you have any questions, please direct them to Github User ${github}`
} 

inquirer
.prompt([
    {
        type: 'input',
        name: 'project',
        message: 'What is the project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description for the project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'Apache2.0', 'Mozilla-Public2.0', 'GNU-AGPLv3', 'GNU-GPLv3', 'GNU-LGPLv3', 'Boost-Software1.0', 'Unilicense'],
        default: ['MIT'],},
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
      },

      {
        type: 'input',
        name: 'contributers',
        message: 'Who were the contributers of the project?',
      },
      {
        type: 'input',
        name: 'testinstructions',
        message: 'What are the test instructions?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github?',
      }
])
.then((data) => {    
        const info = outputData(data);
    fs.writeFile('newreadme.md', info, (err) =>
        err ? console.log(err) : console.log('Success!')
        );
      });