//Form Name
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//Form Validation 
function myFunction() {
    var inpObj = document.getElementById("username");
    if (!inpObj.checkValidity()) {
      document.getElementById("index").innerHTML = inpObj.validationMessage;
    }
}

//Button



