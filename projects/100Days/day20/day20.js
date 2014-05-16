var year = new Date().getFullYear();
var month = new Date().getMonth();
var date = new Date().getDay();

function calculate () {
    
var yeard = year - document.getElementById("year").value; 
var monthd = month - document.getElementById("month").value;
var dated = day - document.getElementById("day").value;
    
var resultSeconds = yeard*365*24*60*60 + monthd*30*60*60 + dated*24*60*60; 

    document.getElementById("seconds-display").innerHTML = month;

 
}
    