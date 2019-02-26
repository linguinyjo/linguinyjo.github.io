function createTableData() {
    let dataStructure = [];
    let table = document.getElementById("myTable")
    let length = table.rows.length
        
    for (let j = 1, i = 0; j < length; j++, i++) {
        let obj = {};
        obj["date"] = table.rows[j].cells[0].innerHTML 
        obj["awake"] = table.rows[j].cells[1].innerHTML                                       
        obj["distance"] = table.rows[j].cells[2].innerHTML               
        obj["meditate"] = table.rows[j].cells[3].innerHTML
        dataStructure.push(obj)              
    }
    return dataStructure
}

// function sortByDistance() {
//     let table = document.getElementById("myTable")
//     let length = table.rows.length
//     let data = createTableData()
//     var ascending = true;
//     if (ascending) {
//         sortedData = data.sort((a,b) => (parseInt(a.distance) > parseInt(b.distance)) ? 1 : ((parseInt(b.distance) > parseInt(a.distance)) ? -1 : 0));
//         direction = 'desc'
//     }
//     else if (direction == 'desc'){
//         sortedData = data.sort((a,b) => (parseInt(a.distance) > parseInt(b.distance)) ? -1 : ((parseInt(b.distance) > parseInt(a.distance)) ? 1 : 0));
//         direction = 'asc'
//     }
//     for (let j = 1, i = 0; j < length; j++, i++) {
//         table.rows[j].cells[0].innerHTML = sortedData[i]["date"]
//         table.rows[j].cells[1].innerHTML = sortedData[i]["awake"]                                     
//         table.rows[j].cells[2].innerHTML = sortedData[i]["distance"]            
//         table.rows[j].cells[3].innerHTML = sortedData[i]["meditate"]              
//     }     
// }    
var dateObj = {
    ascending: false,
    sortByDate: function(x, y) {
        let table = document.getElementById("myTable")
        let length = table.rows.length
        let data = createTableData()
        if (this.ascending == true) {
            sortedData = data.sort((a,b) => (stringToDate(a.date) > stringToDate(b.date)) ? 1 : ((stringToDate(b.date) > stringToDate(a.date)) ? -1 : 0));
        }
        else if (this.ascending == false) {
            sortedData = data.sort((a,b) => (stringToDate(a.date) > stringToDate(b.date)) ? -1 : ((stringToDate(b.date) > stringToDate(a.date)) ? 1 : 0));

        }        
        for (let j = 1, i = 0; j < length; j++, i++) {
            table.rows[j].cells[0].innerHTML = sortedData[i]["date"]
            table.rows[j].cells[1].innerHTML = sortedData[i]["awake"]                                     
            table.rows[j].cells[2].innerHTML = sortedData[i]["distance"]            
            table.rows[j].cells[3].innerHTML = sortedData[i]["meditate"]              
        }
        this.ascending = !this.ascending     
    },

}



// function sortByTime() {
    
// }


function sortByDistance() {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
    
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];

            if (dir == "asc") {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                
                    shouldSwitch = true;
                    break;
                }
            } 
            else if (dir == "desc") {
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                
                shouldSwitch = true;
                break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;   
            switchcount ++; 
        } 
        else {
            if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
            }
        }
    }
}