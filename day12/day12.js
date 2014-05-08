var timer=null;

function stop()
{
clearTimeout(timer);
}

function start()
{
var time=new Date();
    
var hours=time.getHours();
    
var minutes=time.getMinutes();
    
minutes=((minutes < 10) ? "0" : "") + minutes;
    
var seconds=time.getSeconds();
    
seconds=((seconds < 10) ? "0" : "") + seconds;
    
var clock=hours + ":" + minutes + ":" + seconds;
    
document.getElementById("clock").innerHTML=clock;
    
timer=setTimeout("start()",1000);
    
}