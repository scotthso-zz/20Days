


function createChart() {
    
    var jan = document.getElementById("january").value;
    var feb = document.getElementById("february").value;
    var mar = document.getElementById("march").value;
    var apr = document.getElementById("april").value;
    var may = document.getElementById("may").value;
    var jun = document.getElementById("june").value;
    var jul = document.getElementById("july").value;
    var aug = document.getElementById("august").value;
    var sep = document.getElementById("september").value;
    var oct = document.getElementById("october").value;
    var nov = document.getElementById("november").value;
    var dec = document.getElementById("december").value;

    var selection = document.getElementById("selections").value;
         var ctx = document.getElementById("myChart").getContext("2d");
           console.log(selection);
            //Create the data object to pass to the chart
            var data = {
                labels : ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"],
                datasets : [
                          
                            {
                                
                                fillColor : "#7373D9",
                                
                                data : [jan,feb,mar,apr,may,jun,jul,aug, sep, oct, nov, dec ]
                            } 
                           ]
                      };
            
 
            //The options we are going to pass to the chart
            options = {
                scaleFontSize : 18,
                barDatasetSpacing: 15,
                barValueSpacing: 10
            
               
            };
 
            //Create the chart
    if(selection == "line") {
            
        new Chart(ctx).Line(data, options);         
            
            } else if (selection == "bar") {

                new Chart(ctx).Bar(data, options);
            } else if (selection == "radar") {
                
                new Chart(ctx).Radar(data, options);
            }
    
}