var	clsStopwatch = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds
 
		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};
 
		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};
 
		// Reset
		this.reset = function() {
				lapTime = startAt = 0;
			};
 
		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};
 
var x = new clsStopwatch();
var $time;
var clocktimer;
 
function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}
 
function formatTime(time) {
	var m = s = ms = 0;
	var newTime = '';
 

	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;
 
	newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}
 
function show() {
	$time = document.getElementById('time');
	update();
}
 
function update() {
	$time.innerHTML = formatTime(x.time());
}
 
var action = 1;
function start() {
    
    if(action == 1) {
        
	clocktimer = setInterval("update()", 1);
	
    x.start();
    action = 2;
        
} else {
    
    stop();
    action = 1;
  
}

}
 
function stop() {
	x.stop();
	clearInterval(clocktimer);
}
 
