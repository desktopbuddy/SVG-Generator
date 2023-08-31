const inquirer = require("inquirer");
const fs = require("fs");
const { listenerAdded } = require("emittery");
const {Circle,Square,Triangle} = require("./lib/shapes")

const questions = [
    {
        type: "list",
        message: "What shape do you want?",
        choices: ["Circle", "Square", "Triangle"]
        name: "shape"
    },
    {
        type: "input",
        message: "What color do you want your shape?",
        name: "color"
    },
    {
        type: "input",
        message: "What letters would you like? (Input 3 characters)",
        name: "text"
    },
    {
        type: "input",
        message: "What text color would you like?",
        name: "textcolor"
    }
];
