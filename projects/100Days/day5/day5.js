(function() {
    window.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event; // IE-ism
        // event.clientX and event.clientY contain the mouse position
        
        document.getElementById("vX").innerHTML= event.clientX;
       document.getElementById("vY").innerHTML= event.clientY;
    }
})();

//function show_coords(event)
//{
//var x=event.clientX;
//var y=event.clientY;
//    
//    document.getElementById("vX").innerHTML= x;
//    document.getElementById("vY").innerHTML= y;
//
//
//
//}
//    setInterval(function(){show_coords(event)},500);
