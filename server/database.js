//initialize the pg package and get the client
const { Client } = require('pg');

//create a PostgreSQL client object 
const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'vff_website'
});

//setup a connection with the database 
client
    .connect()
    .then(() => {
        console.log('Connected to database');
        
        //execute required query
        var query_result = client.query('SELECT * FROM projects', (err, result) => {
            if(err){
                console.log('Error executing query', err);
            } else{
                console.log('Query result: ', result.rows);
            }
            
            //close the connection
           // client
            //.end()
            //.then(() => {
              //  console.log('Connection closed');
            //})
            //.catch((err) => {
              //  console.error('Error closing connection', err);     
           // });
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database', err);
    });

    module.exports = client;

