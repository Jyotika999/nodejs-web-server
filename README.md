
# Nodejs Server

Tested with ```curl http://localhost:8000``` on terminal
-------------------------------
We’ve now set up a server and got our first server response.

* Let’s break down what happened when we tested our server.
* Using cURL, we sent a GET request to the server at http://localhost:8000.
* Our Node.js server listened to connections from that address. 
* The server passed that request to the requestListener() function. 
* The function returned text data with the status code 200. 
* The server then sent that response back to cURL, which displayed the message in our terminal.

----------------------
# Screenshot of application
![](ss.png)


