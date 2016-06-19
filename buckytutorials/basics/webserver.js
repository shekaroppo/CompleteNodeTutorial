var http = require('http');
var fs = require('fs');

// 404 response

function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error page not found");
    response.end();
}

function onRequest(request, response) {
    console.log("User made request" + request.url);
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else {
        send404Response(response);
    }
}

function createServer() {
    http.createServer(onRequest).listen(8885);
    console.log("Server is now running");
}

module.exports.createServer = createServer;
