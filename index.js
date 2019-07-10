var inquirer = require("inquirer");
var Word = require("./word");
var Letter = require("./letter");
var words = ["dog", "cat", "monkey", "elephant", "shark", "panada", "bird", "elk", "fish", "whale"];
var tries = 0;
var computerWord = new Word(words);

function guessWord() {
    inquirer.prompt([
        {
            name: "whatWord",
            type: "input",
            message: "Guess a letter in the word"
        }
    ])
    .then(function (answer) {
        
    })
}

