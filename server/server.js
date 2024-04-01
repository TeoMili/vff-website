//create a server
const http = require('http');
const client = require('./database');

const server = http.createServer(function(req, res) {
    //set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World');

    //get data from database
    var queryInfo = 'SELECT * FROM projects';
    client.query(queryInfo, (err, result) => {
        if(err){
            console.log('Error executing query', err);
        } else{
            console.log("Query result: ", result.rows);
            res.write(JSON.stringify(result.rows));
            res.end();
        }
    });
    
});
server.listen(5000, function(){
    console.log('Listening on port 5000');
});
