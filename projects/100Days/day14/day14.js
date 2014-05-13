var timer=null;

function stop()
{
clearTimeout(timer);
}

function startTokyo()
{
var time=new Date();
    
var hours=time.getHours()-11;
    
var minutes=time.getMinutes();
    
minutes=((minutes < 10) ? "0" : "") + minutes;
    
var seconds=time.getSeconds();
    
seconds=((seconds < 10) ? "0" : "") + seconds;
    
var clock=hours + ":" + minutes + ":" + seconds;
    
document.getElementById("clock").innerHTML=clock;
    
timer=setTimeout("startTokyo()",1000);
    
}

function startNY()
{
var time=new Date();
    
var hours=time.getHours();
    
var minutes=time.getMinutes();
    
minutes=((minutes < 10) ? "0" : "") + minutes;
    
var seconds=time.getSeconds();
    
seconds=((seconds < 10) ? "0" : "") + seconds;
    
var clock=hours + ":" + minutes + ":" + seconds;
    
document.getElementById("clock2").innerHTML=clock;
    
timer=setTimeout("startNY()",1000);
    
}

function startParis()
{
var time=new Date();
    
var hours=time.getHours()+5;
    
var minutes=time.getMinutes();
    
minutes=((minutes < 10) ? "0" : "") + minutes;
    
var seconds=time.getSeconds();
    
seconds=((seconds < 10) ? "0" : "") + seconds;
    
var clock=hours + ":" + minutes + ":" + seconds;
    
document.getElementById("clock3").innerHTML=clock;
    
timer=setTimeout("startParis()",1000);
    
}

function startSyd()
{
var time=new Date();
    
var hours=time.getHours()+1;
    
var minutes=time.getMinutes();
    
minutes=((minutes < 10) ? "0" : "") + minutes;
    
var seconds=time.getSeconds();
    
seconds=((seconds < 10) ? "0" : "") + seconds;
    
var clock=hours + ":" + minutes + ":" + seconds;
    
document.getElementById("clock4").innerHTML=clock;
    
timer=setTimeout("startSyd()",1000);
    
}

