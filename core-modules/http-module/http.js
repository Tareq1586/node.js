// http module
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello progrmmers. ');
    res.write('How are you doing?');
    res.end();
  } else if (req.url === '/about-us') {
    res.write('This is about-us page');
    res.end();
  } else {
    res.write('Not found');
    res.end();
  }
});
// server.on('connection', () => {
//   console.log('new connection ...');
// });
server.listen(3000);
console.log('listening on port 3000 ...');
