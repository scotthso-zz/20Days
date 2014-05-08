function createChart() {
         var ctx = document.getElementById("myChart").getContext("2d");
            
            //Create the data object to pass to the chart
            var data = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                            {
                                fillColor : "rgba(220,220,220,0.5)",
                                strokeColor : "rgba(220,220,220,1)",
                                data : [65,59,90,81,56,55,40]
                            },
                            {
                                fillColor : "rgba(151,187,205,0.5)",
                                strokeColor : "rgba(151,187,205,1)",
                                data : [28,48,40,19,96,27,100]
                            } 
                           ]
                      };
            
 
            //The options we are going to pass to the chart
            options = {
                barDatasetSpacing : 15,
                barValueSpacing: 10
            };
 
            //Create the chart
            new Chart(ctx).Line(data, options);         
            
            }