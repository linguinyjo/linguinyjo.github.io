function validateForm() {
    let form  = document.getElementsByTagName('form')[0];
    let date = document.getElementById('date').value;
    let error = document.querySelector('.error');
    let table = document.getElementById("myTable")
    let lastRow = document.getElementById("myTable").rows.length - 1;
    
    form.addEventListener("submit", function (event) {
        //check 'awake' field
        let awake = document.getElementById("awake").value
        let regEx = /^(0?[1-9]|1[012]):[0-5][0-9]$/
        if (!regEx.test(awake)) {
            alert("Please enter a correct time - format should be 'HH:MM'")
            return
        }
        let distance = document.getElementById("distance").value
        regEx = /^[0-9]+\.?[0-9]*$/
        if (!regEx.test(distance)) {
            alert("Please enter a correct number to represent distance in km")
            return
        }
            
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
