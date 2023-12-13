// fs module
// appending to a file
// const fs = require('fs');

// fs.writeFileSync('myFile.txt', 'Hello programers');
// fs.appendFileSync('myFile.txt', ' How are you?');

// reading from a file
// const fs = require('fs');

// const data = fs.readFileSync('myFile.txt', 'utf-8');
// console.log(data);

// default behaviour of javascript is asynchrnous way
// because data comes as a drplet of a stream
// reading file in asynchronus way
// const fs = require('fs');

// fs.readFile('myFile.txt', (err, data) => {
//   console.log(data.toString());
// });

// open() method
const fs = require('fs');
// create an empty file named mynewfile2.txt:
fs.open('myFile.txt', 'b', (err, file) => {
  if (err) throw err;
  console.log(file);
});
