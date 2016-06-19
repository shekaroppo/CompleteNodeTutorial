var http = require('http');
function onRequest(request, response) {
    console.log("User made request" + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"})
    response.write("Here is some data");
    response.end();
}

function createServer() {
    http.createServer(onRequest).listen(8886);
    console.log("Server is now running");
}

module.exports.createServer = createServer;
