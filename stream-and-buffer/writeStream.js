// writing in an output file using write stream
// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/big-data.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
// ourReadStream.on('data', (chunk) => {
//   ourWriteStream.write(chunk);
// });

// using pipe: writing in an output file
// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/big-data.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
// ourReadStream.pipe(ourWriteStream);

// finally using the response as a writeable stream
// const http = require('http');
// const fs = require('fs');
// const { chunk } = require('lodash');

// const server = http.createServer((req, res) => {
//   const myReadStream = fs.createReadStream(`${__dirname}/big-data.txt`, 'utf-8');
//   myReadStream.on('data', (chunk) =>{
//     res.write(chunk);
//   });
//   // using pipe
//   // myReadStream.pipe(res);
// });
// server.listen(3000);
// console.log('listening on port 3000 ...');