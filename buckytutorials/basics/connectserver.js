var connect = require('connect');
var http = require('http');
var app = connect();
function doFirst(request, response, next) {
    console.log("First");
    next();
}
function doSecond(request, response, next) {
    console.log("Second");
    next();
}
// app.use(doFirst);
// app.use(doSecond);

app.use("/profile", doFirst);
app.use("/contacts", doSecond);

function createServer() {
    http.createServer(app).listen('8886');
    console.log("Server is now running");
}

module.exports.createServer = createServer;
