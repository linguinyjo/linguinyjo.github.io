
//function for generating the table - fetches data object from the api
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
        addRow(length, table);
           
        if (Array.isArray(data) && length) {
            //set counter value
            document.getElementById("count").innerHTML = length;
            
            //iterate through all cells in the sql db and assign them to HTML table
            for (let i = 0; i < table.rows.length + 1; i++) {
                for (let j = 0; j < 4; j++) {
                    let row = i + 1;
                    switch (j) {
                        case 0:
                            table.rows[row].cells[j].innerHTML = data[i]["date"]
                            break;
                        case 1:
                            table.rows[row].cells[j].innerHTML = data[i]["awake"]
                            break
                        case 2:
                            table.rows[row].cells[j].innerHTML = data[i]["distance"]
                            break
                        case 3:
                            table.rows[row].cells[j].innerHTML = data[i]["meditate"]
                            break
                    }    
                }
            }                               
        }
        //set counter to 0 if data returned as an empty array
        else { document.getElementById("count").innerHTML = "0";}
    });       
}());

//creates a number of new rows in the table specified
function addRow(num, myTable) {  
    for (let i = 1; i < num ; i++) {
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
        table.deleteRow(1);
    }
}

function dateOfTomorrow() {
    const date = new Date();
    let dd = date.getDate() + 1;
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    let tomorrow = dd + '/' + mm + '/' + yy;
    return tomorrow;    
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

(function () {
    document.getElementById('date').value = dateOfToday()
}());



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



/////////////////////////////////////////////////////////////////////
                            //JUNK//
/////////////////////////////////////////////////////////////////////


//const pullData = require('../data/dailytrackerdb')
//import { con } from '../data/dailytrackerdb.js';
//Set database connection credentials

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("txtHint").innerHTML = this.responseText;
//     }
//   };
// xhttp.open("GET", "files/test.csv", true);
// xhttp.send();



