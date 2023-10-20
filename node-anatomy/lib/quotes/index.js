/*
 * Title: Quotes library
 * Description: Utility library for generating random quoes
 * Author: Tareq Munawar
 * Date: 19/10/23
*/

// Dependencies
const fs = require('fs');

// Quotes object- Module scaffoling
const quote = {};

//
quote.getAllQuotes = function getAllQuotes() {
  const allQuotes = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');
  const quotesArray = allQuotes.split();
  console.log(quotesArray);
};
quote.getAllQuotes();
