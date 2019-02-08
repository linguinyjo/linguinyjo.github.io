
//creates a new row in the table with tomorrows date; doesn't create a row if there is already a row existing with tomorrow's date
function addRow() {
    let counter = 1;
    let tomorrow = dateOfTomorrow()  
    var table = document.getElementById("myTable"); 
   
    if (table.rows[counter].innerHTML.includes(tomorrow)){
        return;
    }
    let awakeEntry = document.getElementById("awake").value;
    let distanceEntry = document.getElementById("distance").value;
    let meditateEntry = document.getElementById("meditate").value;
    

    var row = table.insertRow(counter);
    var cell1 = row.insertCell(0);   
    var cell2 = row.insertCell(1);    
    var cell3 = row.insertCell(2);   
    var cell4 = row.insertCell(3); 
        

    cell1.innerHTML = tomorrow;
    cell2.innerHTML = awakeEntry;
    cell3.innerHTML = distanceEntry;
    cell4.innerHTML = meditateEntry;        
}

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

var myArr = ['foo', 'bar', 'baz']
console.log(myArr)
myArr[2]
console.log('foo' in myArr)

var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
console.log(arr);