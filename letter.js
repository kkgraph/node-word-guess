
var Word = require("./word");
var words = ["dog", "cat", "monkey", "elephant", "shark", "panada", "bird", "elk", "fish", "whale"];

function Letter(params) {
    this.params = params;
    this.dashes = "";
    // for (let i = 0; i < this.params.random.length; i++) {
    //     this.dashes += "_ ";
    // }

    console.log(this.params);
}

console.log(Word(words));