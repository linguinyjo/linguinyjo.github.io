
//variable to keep track of whether data has been input for today
var dataForToday; 

//function for generating the table - fetches data object from the api
//calls checkcounter function to calculate current running counter
//creates a table with rows = number of ids in table
//iterates through each cell of the table and pulls corresponding values from the data object
//updates the counter for total consecutive 
(function genTable () {       
    fetch('http://localhost:3002/dailytarget')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {   
        var table = document.getElementById("myTable");
        let length = data.length;      
        if (Array.isArray(data) && length) {
            //check and set counter value
            let counter = checkCounter(data, length)
            document.getElementById("count").innerHTML = counter; 
            
            dataforToday = checkLastDate(data, length)
            
            addRow(counter, table);
                 
            //iterate through array of data and assign values to HTML table
            for (let i = length - counter, j = 1; i < length; i++, j++) {
                let row = j;
                table.rows[row].cells[0].innerHTML = data[i]["date"]
                table.rows[row].cells[1].innerHTML = data[i]["awake"]                                     
                table.rows[row].cells[2].innerHTML = data[i]["distance"]             
                table.rows[row].cells[3].innerHTML = data[i]["meditate"]          
                }
            }                               
        //set counter to 0 if data returned as an empty array
        else { document.getElementById("count").innerHTML = "0" }
    }).catch(function (err) {
        console.log(err);
    })       
}());

//function to calculate the running counter
//loops from the end of the array incrementing the counter until the conditions are not met
//and then returns the counter
function checkCounter(data, length) {
    let counter = 0;
    //gets last date entered into the db and converts it into 'yyyy, mm, dd' to create a baseline date object 
    //from which to compare all subsequent dates in the array
    let lastDate = data[length - 1]["date"].split('/')//.replace(/[/-]/g, ',')
    let tempVar = lastDate[0];
    lastDate[0] = lastDate[2];
    lastDate[2] = tempVar;
    lastDate = lastDate.toString()
    //compares our baseline date (last entered date in our db) with each date entered into the db, subtracting 1 from the baseline date each time.
    //when they do not '==' each other, this means there is a missing date and therefore the chain is broken. If they do '==' it goes on to check
    //the remaining conditions and then increments the counter if they are all met.
    for (let i = length - 1, j = 0; i >= 0; i--, j++) {
        let baselineDate = new Date(lastDate);  
        if (data[i]["date"] == calcDate(baselineDate, j)) {     
            if (data[i]["awake"] == "06:00") {
                if (data[i]["distance"] >= 3) {
                    if (data[i]["meditate"] == 'yes') {
                        counter++
                    }
                }            
            }         
        }
        else { return counter }        
    } 
    return counter 
}

//takes in a date object, subtracts x number of days and returns the new date value
function calcDate(date, index) {
    let ourDate = date.setDate(date.getDate() - index)
        ourDate = moment(date, 'DD/MM/YYYY', true).format()
        ourDate = ourDate.substring(0, 10).split('-')
    //pad date with 0 if it is single digit
    
    //swap date and year position in the array
    var x = ourDate[0];
    ourDate[0] = ourDate[2];
    ourDate[2] = x;
    
    ourDate = ourDate.toString().replace(/,/g, '/')

    return ourDate   
}

function dateOfToday() {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    let today = dd + '/' + mm + '/' + yy;
    return today;
};

function checkLastDate(data, length) {
    let today = dateOfToday();
    
    if (data[length - 1]["date"] == today) { return true }       
    else { return false }   
}

//creates a number of new rows in the table specified
//submits data entered to mysql
function addRow(num, myTable) {  
    for (let i = 1; i < num; i++) {
        var row = myTable.insertRow(i);
        row.insertCell(0);   
        row.insertCell(1);    
        row.insertCell(2);   
        row.insertCell(3); 
    }         
}

//function created for testing purposes, shouldnt be any actual need to remove rows as it is created from the db
function removeRow() {
    let counter = document.getElementById("myTable").rows.length - 1;
    var table = document.getElementById("myTable");
    if (counter > 1) {
        table.deleteRow(counter);
    }
}

(function () {
    document.getElementById('date').value = dateOfToday()
}())



/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////code for implementing the table with onclick functionality////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// (function genTable () {
//     $(document).ready(function() {
//         $('button#getServers').on('click',function() {
//             fetch('http://localhost:3002/dailytarget')
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {   
//                 var table = document.getElementById("myTable");
//                 let length = data.length;
//                 addRow(length, table);                             
//             });    
//         }
//     )})
// }())




