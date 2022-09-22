const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    const num = _.random(0,20);
    console.log(num);

    res.setHeader('Content-Type', 'text/html');

    res.write('<p>hello, ninjas</p>');
    res.write('<p>hello again, ninjas</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});