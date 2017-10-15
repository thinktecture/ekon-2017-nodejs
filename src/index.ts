import http = require('http');

console.log('Hallo EKON from Typescript!');

const server = new http.Server((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('OK from EKON');
});

server.listen(8080);
