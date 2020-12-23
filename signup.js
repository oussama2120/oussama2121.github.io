/*global document, alert, prompt*/
/*jslint plusplus: true, evil: true*/

function login() {
    
    var username = document.getElementById("text").value,
        password = document.getElementById("pass").value,
        Email = document.getElementById("email").value,
        repassword = document.getElementById("repass").value;
    
    if (username === "" || password === "" || Email === "" || repassword === "") {
        
        alert("*Please fill out all the fields*");
    }
}