// to do store inputs from inquirer into an object
let fs = require('fs');
const inquirer = require('inquirer');

licenses = [
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'Boost Software License 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'Mozilla Public License 2.0',
];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'usernameInput',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddressInput',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectNameInput',
    },
    {
        type: 'input',
        message: "Please provide a short description for your project.",
        name: 'projectDescription',
    },
    {
        type: 'list',
        message: "Select a license for this project.",
        name: 'projectLicense',
        editableList: false,
        choices: licenses,
    },
    {
        type: 'input',
        message: "What command should be run to install dependences?",
        name: 'commandLineInstallInput',
    },
    {
        type: 'input',
        message: "What command should be run in order to run tests?",
        name: 'commandLineTestInput',
    },
    {
        type: 'input',
        message: "What information might a developer need to know about using the repository?",
        name: 'instructProjectUsage',
    },
    {
        type: 'input',
        message: "What information might a developer need to know about contributing to the repository",
        name: 'instructProjectContributions'
    }], function(answers) {
        console.log(JSON.stringify(answers, null, 2));
})
.then((response) => {

    let {projectNameInput, projectLicense, projectDescription, commandLineInstallInput, instructProjectUsage, instructProjectContributions, commandLineTestInput, usernameInput, emailAddressInput} = response;
  


    fs.writeFile('README_output.md',
`<h1 id="project-title">${projectNameInput}</h1>\n 
<img src="https://img.shields.io/badge/license-${projectLicense}-blue.svg">\n
\n
<h2 id="table-contents">Table of Contents</h2>\n
-[Description](#project-desc)\n
-[Installation](#project-install)\n
-[Usage](#project-usage)\n
-[Contributing](#project-contributing)\n
-[Tests](#project-tests)\n
-[Questions/Contact](#project-contact)\n

<h2 id="project-desc">Description</h2>
    ${projectDescription}
    <p style='text-align: right;'><a href="#project-title">Back to Top</a></p>
<h2 id="project-install">Installation</h2>
    ${commandLineInstallInput}
    <p style='text-align: right;'><a href="#project-title">Back to Top</a></p>
<h2 id="project-usage">Usage</h2>
    ${instructProjectUsage}
    <p style='text-align: right;'><a href="#project-title">Back to Top</a></p>
<h2 id="project-contributing">Contributing</h2>
    ${instructProjectContributions}
    <p style='text-align: right;'><a href="#project-title">Back to Top</a></p>
<h2 id="project-tests">Tests</h2>
    ${commandLineTestInput}
    <p style='text-align: right;'><a href="#project-title">Back to Top</a></p>
<h2 id="project-tests">License</h2>
    Licensed under: ${projectLicense}.
    <p style='text-align: right;'><a href="#project-title">Back to Top</a></p>
    
<h2 id="project-contact">Questions / Contact</h2>\n
-View my [GitHub](https://github.com/${usernameInput}) \n
-Reach out directly with questions: <${emailAddressInput}> \n
<p style='text-align: right;'><a href="#project-title">Back to Top</a></p>`, 
    (err) => err ? console.error(err) : console.log('Check directory for details'))
});


 
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
