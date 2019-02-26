(function generatePage () {       
    fetch('http://localhost:3002/dailytarget')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {   
        var table = document.getElementById("myTable");
        let length = data.length;      
        if (Array.isArray(data) && length) {     
            //create number of rows in table equal to current counter value
            addRow(length, table);     
            //iterate through array of data and assign values to HTML table
            for (let i = 0, j = 1; i < length; i++, j++) {
                table.rows[j].cells[0].innerHTML = data[i]["date"]
                table.rows[j].cells[1].innerHTML = data[i]["awake"]                                     
                table.rows[j].cells[2].innerHTML = data[i]["distance"]             
                table.rows[j].cells[3].innerHTML = data[i]["meditate"]          
                }
            }                               
    }).catch(function (err) {
        console.log(err);
    })       
}());