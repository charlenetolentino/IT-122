var http = require("http");

http.createServer(function (request, response) {
// Send the HTTP header
// HTTP Status: 200 : OK //



response.writeHead(200, {'Content-Type': 'text/plain'});

// Send the response body as "Hello World, my name is Charlene" 

response.end('Hello World, My name is Charlene.');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');