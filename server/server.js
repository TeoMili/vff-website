//create a server
const http = require('http');

const server = http.createServer(function(req, res) {
    //set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type');

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World');
    res.end();
});
server.listen(5000, function(){
    console.log('Listening on port 5000');
});
