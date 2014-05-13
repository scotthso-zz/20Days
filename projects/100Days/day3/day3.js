var page = document.getElementById("page");

function randomColor() {

    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    
    for (var i =0; i < 6; i++) {
       
        color += letters[Math.floor(Math.random()*16)];
}
    

    document.getElementById("color").innerHTML=color;
    page.style.backgroundColor = color;
   
}

setInterval(function(){randomColor()}, 1000);