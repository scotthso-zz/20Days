var click = 0;
var count = 0;
var time = 20;
var run = 0;


function increase() {
if (run == 0) {
    click++;    
    document.getElementById("count").innerHTML=click;

if(count == 0) {
  
    activate();
    
  }
    count++;
 }
}


function countdown() {
    
    time--;
    document.getElementById("time").innerHTML=time;
    
    if(time <= 1) {
        time = 1;
        run = 1;
        document.getElementById("time").innerHTML=click/20 + " clicks/second";
    }
}



 function activate() {
     setInterval(function(){countdown()},1000);   

}    

