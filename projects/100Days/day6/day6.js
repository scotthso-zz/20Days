function load () {
    var noSubs = 0;
    var httpRequest;
    var channelName = document.getElementById("channel").value;
   
    
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
        httpRequest.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername='+channelName+'&key=AIzaSyCWdryL7avlw9XyaFDaJGrVSg1Z1JCDnsw', true);
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
                    
                    var noSubs = result.items[0].statistics.subscriberCount;
                    console.log(result.items[0].statistics.subscriberCount);
                    document.getElementById("subcount").innerHTML = noSubs;
                    
                } else {
                    alert('There was a problem with the request.');
                }
            }
        } catch(e) {
            alert('Caught Exception: ' + 'no such channel name');
        }
    }
}

