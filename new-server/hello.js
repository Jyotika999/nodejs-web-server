const http = require("http");
const host = 'localhost';
const port = 8000;


// This function is meant to handle an incoming HTTP request and return an HTTP response.
// This function must have two arguments, a request object and a response object. 
//The request object captures all the data of the HTTP request that’s coming in. 
//The response object is used to return HTTP responses for the server.
const requestListener = function (req, res) {
    res.writeHead(200); // sets the HTTP status code of the response. 200 corresponds to "OK"
    res.end("My first server!"); // writes the HTTP response back to the client who requested it. This function returns any data the server has to return. In this case, it’s returning text data.
};



//This server accepts HTTP requests and passes them on to our requestListener() function.
const server = http.createServer(requestListener);  //we create a new server object via the http module’s createServer() function.
server.listen(port, host, () => {  // we must bind our server to a network address.
    // It accepts three arguments: port, host, and a callback function that fires when the server begins to listen.
    // The callback function logs a message to our console so we can know when the server began listening to connections.

    console.log(`Server is running on http://${host}:${port}`);
});