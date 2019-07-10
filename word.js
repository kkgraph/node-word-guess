function Word(wordsArray) {
    this.wordsArray = wordsArray;
    this.random = wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
    return this.random;
};

module.exports = Word;