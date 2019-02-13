const mysql = require('mysql');

// Set database connection credentials
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dailytarget',
});


// con.connect(function(err) {
//     if (err) throw err;
//     con.query('SELECT * FROM dailytarget', (error, result, fields) => {
//         if (error) throw error;
    
//         let med = result[0].meditate
//     });
// })

module.exports = con;