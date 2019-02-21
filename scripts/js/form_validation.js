function validateForm() {
    var form  = document.getElementsByTagName('form')[0];
    var date = document.getElementById('date').value;
    var error = document.querySelector('.error');
    let table = document.getElementById("myTable")
    let lastRow = document.getElementById("myTable").rows.length - 1;
    
   
    form.addEventListener("submit", function (event) {

        if (table.rows[lastRow].cells[0].innerHTML == date) { 
            alert("A entry for today's date already exists in the database!")
            error.className = "error active";           
            event.preventDefault();
        }
        else {
            form.action = 'http://localhost:3002/dailytarget';
            form.method = 'POST';
        }
          
      }, false);
}
