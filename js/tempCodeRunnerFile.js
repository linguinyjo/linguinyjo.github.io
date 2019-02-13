const con = require('../data/dailytrackerdb')

function pullData (row, field) {
    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM dailytarget', (error, result, fields) => {
            if (error) throw error;
            
            let data = result[row][field]
            console.log(data)
            return data
           
        });
    })
}

pullData(2, 'meditate');