let fs = require('fs');

// placeholder inputs are received
// "what is your github username?
let usernameInput = "MyGitHubUsername";
// "what is your github email?
let emailAddressInput = "MyEmailAddress@Internet.gov";
// "what is your projec tname?
let projectNameInput = "MyProjectName MyProjectName";
// Short description 
let projectDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod non illo obcaecati reiciendis. Id odit quibusdam similique quas, dolor placeat voluptatibus asperiores temporibus! Ab sequi ex consectetur inventore itaque vitae a quas fugiat eius? Voluptates ratione nemo molestiae, possimus necessitatibus corporis in magni illum dolores reprehenderit! Sint sit distinctio molestiae.";
// What license should your project have?.. select up or down on your license f
let projectLicense = "MIT";
// What command should be run to install dependences
let commandLineInstallInput = "npm -foo -bar -buzz -bee";
// What command shoudl be run to run tests?
let commandLineTestInput = "npm -test -this -prog -plz";
// What does the user need to know about using the repo? I wan'texcept pull requests
let instructProjectUsage = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod non illo obcaecati reiciendis.";
// What does the user need to now about contributing to the Repo?Please done
let instructProjectContributions = "Ab sequi ex consectetur inventore itaque vitae a quas fugiat eius? Voluptates ratione nemo molestiae, possimus necessitatibus corporis in magni illum dolores reprehenderit! Sint sit distinctio molestiae.";

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

fs.writeFile('README.md',`
    <h1 id="project-title">${projectNameInput}</h1> 
    [GitHub license](https://img.shields.io/badge/license-${projectLicense}-blue.svg)
    <h2 id="table-contents">Table of Contents</h2>
    - [Top](#project-title)
    - [Description](#project-desc)
    - [Installation](#project-install)
    - [Usage](#project-usage)
    - [Contributing](#project-contributing)
    - [Tests](#project-tests)
    - [Questions/Contact](#project-contact)
    
    <h2 id="project-desc">Description</h2>
        ${projectDescription}
        <p style='text-align: right;'><a href="#project-title">Back to Top</a></p>
    <h2 id="project-install">Installation</h2>
        ${commandLineInstallInput}
        <p style='text-align: right;'><a href="#project-title">Back to Table</a></p>
    <h2 id="project-usage">Usage</h2>
        ${instructProjectUsage}
        <p style='text-align: right;'><a href="#project-title">Back to Table</a></p>
    <h2 id="project-contributing">Contributing</h2>
        ${instructProjectContributions}
        <p style='text-align: right;'><a href="#project-title">Back to Table</a></p>
    <h2 id="project-tests">Tests</h2>
        ${commandLineTestInput}
        <p style='text-align: right;'><a href="#project-title">Back to Table</a></p>
    <h2 id="project-tests">Questions / Contact</h2>
    - [View my GitHub](https://github.com/${usernameInput})
    - Reach out directly with questions: ${emailAddressInput}
        <p style='text-align: right;'><a href="#project-title">Back to Table</a></p>
    `, (err) =>
    err ? console.error(err) : console.log('Check directory for details')
);
 
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
