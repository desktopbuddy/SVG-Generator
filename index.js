const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

const questions = [
    {
        type: "list",
        message: "What shape do you want?",
        choices: ["Circle", "Square", "Triangle"],
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

inquirer.prompt(questions).then(res=>{
    let shape;
    if (res.shape==="Circle"){
        shape=new Circle(res.color, res.text, res.textcolor)
    };
    if (res.shape==="Square"){
        shape=new Square(res.color, res.text, res.textcolor)
    };
    if (res.shape==="Triangle"){
        shape=new Triangle(res.color, res.text, res.textcolor)
    };
    fs.writeFileSync("./examples/logo.svg",shape.render())
});