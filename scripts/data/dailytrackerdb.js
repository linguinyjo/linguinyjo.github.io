//import * as mysql from '../../node_modules/mysql/index.js';
const mysql = require('mysql')

// Set database connection credentials
export const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dailytarget',
});

//wraps a query to the database in a promise; returns a promise object with the complete table of results
pullData = function () {
    return new Promise(function(resolve, reject) {
         con.connect(function(err) {
            if (err) throw err;
            con.query('SELECT * FROM dailytarget', (err, result) => {
                if (err) {
                    return reject(err)
                }                  
                resolve(result)                                                 
            });
            con.end();
        })      
    });  
};

pullData().then(function(result) {
    
//     //everything we want to do with the results from the mysql db query needs to go inside of here
//     for (let element of result)
//     console.log(element['distance'])
      
   
}).catch((err) => setImmediate(() => { throw err; }));
