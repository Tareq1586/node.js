// fs module
// appending to a file
// const fs = require('fs');

// fs.writeFileSync('myFile.txt', 'Hello programers');
// fs.appendFileSync('myFile.txt', ' How are you?');

// reading from a file
// const fs = require('fs');

// const data = fs.readFileSync('myFile.txt');
// console.log(data.toString());

// default behaviour of javascript is asynchrnous way
// reading file in asynchronus way
const fs = require('fs');

fs.readFile('myFile.txt', (err, data) => {
  console.log(data.toString());
});