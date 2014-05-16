var year = new Date().getFullYear();
var month = new Date().getMonth();


function calculate () {
    
var yeard = year - document.getElementById("year").value; 
var monthd = month - document.getElementById("month").value;

    
var resultSeconds = yeard*365*24*60*60 + (monthd*30*24*60*60); 

document.getElementById("seconds-display").innerHTML =  "You have lived for approximately " + resultSeconds + " seconds. Not taking into account different amount of days for each month and date.";

 
}
    