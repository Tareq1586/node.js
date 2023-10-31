/* 
 * Title: Random Quote Generator Project
 * Description: 
 * Author: Md. Tareq Munawar
 * Date: 19/10/23
 * 
*/

// Project dependencies
const mathLibrary = require('./lib/math');
const quoteLibrary = require('./lib/quotes');

// App object- module scaffolding
const app = {};

// Configuration
app.config = {
  timeBetweenQuotes: 1000,
};

// Function that generates random quotes
app.getRandomQuote = function getRandomQuote(){
    const quotesArray = quoteLibrary.getAllQuotes();
    const lengthOfQuotesArray = quotesArray.length;
    const randomNumber = mathLibrary.getRandomNumber(1, lengthOfQuotesArray);
    const selectedQuote = quotesArray[randomNumber - 1];
    console.log(selectedQuote);
}

// Indefinite loop
app.indefiniteLoop = function indefiniteLoop(){
  setInterval(app.getRandomQuote, app.config.timeBetweenQuotes);
}

//
app.indefiniteLoop();
