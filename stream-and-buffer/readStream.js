// basics of streamming: data comes as a stream of droplet
// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/big-data.txt`, 'utf-8');
// ourReadStream.on('data', (chunk) => {
//   console.log(chunk);
// });
// console.log('Hello there');

// using request object as a readable stream
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('<html><head><title>form</title></head>');
//     res.write(
//       '<body><form method = "post" action = "/process"><input name = "message"/></form></body>',
//     );
//     res.end();
//   } else if (req.url === '/process' && req.method === 'POST') {
//     // we can not get the whole data completely
//     // because the data is a readable stream
//     // console.log(req.data);
//     const body = [];
//     req.on('data', (chunk) => {
//       body.push(chunk);
//     });
//     req.on('end', () => {
//       console.log('Stream finished!');
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody);
//     });
//     res.write('Thank you for submitting');
//     res.end();
//   } else {
//     res.write('Not found');
//     res.end();
//   }
// });
// server.listen(3000);
// console.log('listening on port 3000 ...');
