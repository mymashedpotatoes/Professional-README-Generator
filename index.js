//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
        },
        {
        type: "input",
        message: "Add a description?",
        name: "description"
        },
        {
        type: "input",
        message: "Installation instructions:",
        name: "install"
        },
        {
        type: "input",
        message: "Usage info:",
        name: "useage"
        },
        {
        type: "input",
        message: "Contribution guidelines:",
        name: "contribution"
        },
        {
        type: "input",
        message: "Test Instructions:",
        name: "test"
        },
        {
        type: "list",
        message: "Choose a license:",
        name: "license",
        choices: [
            'Apache License 2.0',
            'GNU General Public License',
            'MIT License',
            'BSD 3-Clause "New" or "Revised" License',
            'BSD 2-Clause "Simplified" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU General Public License v2.0',
            'Mozilla Public License 2.0',
            'The Unlicense',
            'None'
            ]
        },
        {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
        },
        {
        type: "input",
        message: "What is your email?",
        name: "email"
        }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.log(err) : console.log("Writing readme now...");
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then (function (response) {
            console.log(response);
            writeToFile(`${response.title}.md`, response)
        });

}


init();
