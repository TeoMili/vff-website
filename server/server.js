//create a server
const http = require('http');
const url = require('url');
const client = require('./database');

const server = http.createServer(function(req, res) {
    //set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.writeHead(200, {'Content-Type' : 'application/json'});

    var queryInfo = "";
    
    //parse url to extract query parameters
    const parsedUrl = url.parse(req.url, true);

    if(req.method === 'GET' && req.url === '/api/projects'){
        queryInfo = 'SELECT ID FROM projects;';
    }else if(req.method === 'GET' && parsedUrl.pathname === '/api/project'){
        const projectId = parsedUrl.query.id;
        queryInfo = `SELECT Name, S_Description from projects WHERE ID = ${projectId}`;
    }else if(req.method === 'GET' && parsedUrl.pathname === '/api/home'){
        const projectName = parsedUrl.query.name;
        console.log(projectName);
        queryInfo = `SELECT ID FROM projects WHERE Name = '${projectName}';`;
        console.log("Query info: ", queryInfo);
    }else if(req.method === 'GET' && parsedUrl.pathname === '/api/projectData'){
        const projectId = parsedUrl.query.id;
        queryInfo = `SELECT * FROM projects LEFT JOIN images ON projects.ID = images.Project_ID WHERE projects.ID = ${projectId};`;
    }

    //get data from database 
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
