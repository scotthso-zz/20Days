
function load () {
    var books0;
    var books1;
    var books2;
    var httpRequest;
    var authorName = document.getElementById("author").value;
   
  
    var makeRequest = function()
	{
        //Standard crap make to get info from browsers of different types
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } 
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }
        //If the url doesn't work I think
        if (!httpRequest) {
          alert('Giving up :( Cannot create an XMLHTTP instance');
          return false;
        }
        //Editing the channel name to be the right parameter
        //channelName = channelName.trim();
        
        //Calls the response function to get the data
        httpRequest.onreadystatechange = responsefunction;
        httpRequest.open('GET', 'http://api.harpercollins.com/api/v3/hcapim?apiname=catalog&format=JSON&authorname='+authorName+'&apikey=7rtdq9sfxtp9f9pfgkjempb9', true);
        httpRequest.send();
	}
    
    makeRequest();

    function responsefunction() {
        var readyState = httpRequest.readyState;
        var status = httpRequest.status;
        try {
            //Standard to make sure the server is ready or something
            if (httpRequest.readyState == 4) {
                if (httpRequest.status == 200) {
                    //parsing/getting the data
                    var data = httpRequest.responseText;
                    var result = JSON.parse(data);
                    
                    
                    
                    var books0 = result.Product_Group[0].Products[0].Title;
                    var books1 = result.Product_Group[1].Products[0].Title;
                    var books2 = result.Product_Group[2].Products[0].Title;
                    console.log(result.Product_Group[0].Products[0].Title);
                    
                    document.getElementById("title1").innerHTML = books0;
                    document.getElementById("title2").innerHTML = books1;
                    document.getElementById("title3").innerHTML = books2;
                    
                } else {
                    alert('There was a problem with the request.');
                }
            }
        } catch(e) {
            alert('Caught Exception: ' + 'no such author');
        }
    }
}

