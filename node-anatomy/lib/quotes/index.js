/*
 * Title: Quotes library
 * Description: Utility library for generating a list of quotes
 * Author: Md. Tareq Munawar
 * Date: 19/10/23
 * 
*/

// Dependencies
const fs = require('fs');

// Quotes object- module scaffoling
const quote = {};

//
quote.getAllQuotes = function getAllQuotes() {
  const quotesFile = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');
  // n?: Matches any string that contains zero or one occurances of n
  const quotesArray = quotesFile.split(/\r?\n/);
  return quotesArray;
};

// Export the library
module.exports = quote;
