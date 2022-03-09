const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;

//We want our HTML file to be read when a user requests our system.

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")  // fs.readFile() method to load the file. Its argument has __dirname + "/index.html". The special variable __dirname has the absolute path of where the Node.js code is being run. We then append /index.html so we can load the HTML file we created earlier.
//If the fs.readFile() promise successfully resolves, it will return its data. We use the then() method to handle this case. The contents parameter contains the HTML file’s data.
        .then(contents => {
            res.setHeader("Content-Type", "text/html");  //set the Content-Type header to text/html to tell the client that we are returning HTML data.
            res.writeHead(200);  // status code = 200, "ok"
            res.end(contents);  // We finally send the client the HTML page we loaded, with the data in the contents variable.
        })
        //The fs.readFile() method can fail at times, so we should handle this case when we get an error. Add this to the requestListener() function:
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});