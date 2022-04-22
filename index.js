// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    "Please enter your full name",
    "1. Please enter th file Title:",
    "2. Please answer descriptions now",
    "3. Please enter the installation instructions:",
    "4. Please ener usage information:",
    "5. Please enter contribution guidelines",
    "6. Please enter test instructions",
    "7. Please choose a license for my application from a list of options below: ",
    "8. Please enter your GitHub address.",
    "9. Please enter your Email address. ",
];
const descriptionQuestions=["a.What was your motivation?",
"b. Why did you build this project?",
"c. What problem does it solve?",
"d. What did you learn?"]


function writeToFile(fileName, data) {
    const markdown = generateMarkdown.generateMarkdown(data)
    console.log("hi")
    console.log(markdown)
    fs.writeFile(fileName, markdown, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'title',
            },
            {
                type: 'confirm',
                message: questions[2],
                name: 'description',
            },
            {
                type: 'input',
                message: descriptionQuestions[0],
                name: 'a',
            },
            {
                type: 'input',
                message: descriptionQuestions[1],
                name: 'b',
            },
            {
                type: 'input',
                message: descriptionQuestions[2],
                name: 'c',
            },
            {
                type: 'input',
                message: descriptionQuestions[3],
                name: 'd',
            },

            {
                type: 'input',
                message: questions[3],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usageInfo',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'testInst',
            },
            {
                type: 'list',
                message: questions[7],
                name: 'badge',
                choices: ['GNU LGPL v3', 'Mozilla Public License 2.0',
                    "MIT License", "The Unlicense"],
            },
            {
                type: 'input',
                message: questions[8],
                name: 'gitHub',
            },
            {
                type: 'input',
                message: questions[9],
                name: 'email',
            },
        ])
        .then((answers) => {
            writeToFile('./PROFESSIONAL-README.md', answers)

        })
        .catch((error) => {
            if (error.isTtyError) {

            } else {

            }
        });
}

// Function call to initialize app
init();

