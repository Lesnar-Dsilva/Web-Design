let timeMilliSeconds = document.getElementById("time-milliseconds");
let timeSeconds = document.getElementById("time-seconds");
let timeMinutes = document.getElementById("time-minutes");
let timeHours = document.getElementById("time-hours");
let laps = document.getElementById("laps");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let lapBtn = document.getElementById("lap-btn");
let resetBtn = document.getElementById("reset-btn");
let warning = document.getElementById("warning");

function MilliSeconds(){
	// MILLISECONDS SEGEMENT

	milliSeconds = 0;

	window.incrementMilliSeconds = function(){
		milliSeconds++
	}

	window.printMilliSeconds = function() {
		if (milliSeconds <= 10 && milliSeconds >= 0){timeMilliSeconds.innerHTML = "0" + milliSeconds;}
		if (milliSeconds >= 10 && milliSeconds <= 100){timeMilliSeconds.innerHTML = milliSeconds;}
		if (milliSeconds == 100) {timeMilliSeconds.innerHTML = "00";milliSeconds = 0;}
	}

	incrementMilli = setInterval(incrementMilliSeconds, 10);
	printMilli = setInterval(printMilliSeconds, 10);
}

function Seconds(){
	// SECONDS SEGEMENT

	seconds = 0;

	window.incrementSeconds = function(){
	seconds++;
	}

	window.printSeconds = function(){
		
		if (seconds <= 10 && seconds >= 0){timeSeconds.innerHTML = "0" + seconds;}
		if (seconds >= 10 && seconds <= 60) {timeSeconds.innerHTML = seconds;}		
		if (seconds == 60) {timeSeconds.innerHTML = "00"; seconds = 0;}
	}

	incrementSec = setInterval(incrementSeconds, 1000);
	printSec = setInterval(printSeconds, 1000);
}

function Minutes(){
	// MINUTES SEGEMENT

	minutes = 0;

	window.incrementMinutes = function(){
		minutes++
	}

	window.printMinutes = function() {
		if (minutes <= 10 && minutes >= 0){timeMinutes.innerHTML = "0" + minutes;}
		if (minutes >= 10 && minutes <= 100){timeMinutes.innerHTML = minutes;}
		if (minutes == 100) {timeMinutes.innerHTML = "00";minutes = 0;}
	}

	incrementMin = setInterval(incrementMinutes, 60000);
	printMin = setInterval(printMinutes, 60000);
}

function Hours(){
	// HOURS SEGEMENT

	hours = 0;

	window.incrementHours = function(){
		hours++
	}

	window.printHours = function() {
		if (hours <= 10 && hours >= 0){timeHours.innerHTML = "0" + hours;}
		if (hours >= 10 && hours <= 100){timeHours.innerHTML = hours;}
		if (hours == 100) {timeHours.innerHTML = "00";hours = 0;}
	}

	incrementHour = setInterval(incrementHours, 3600000);
	printHour = setInterval(printHours, 3600000);
}

function start(){
	MilliSeconds()
	Seconds()
	Minutes()
	Hours()
	lapBtn.style.display = "block";
	startBtn.style.display = "none";
}

startBtn.addEventListener("click", start);

lapArray = []

function lap(){
	let lapRecord = `<br>${timeHours.innerHTML}:${timeMinutes.innerHTML}:${timeSeconds.innerHTML}:${timeMilliSeconds.innerHTML}`;
	laps.innerHTML += lapRecord;
	
	lapArray.push(lapRecord)
	
	if(lapArray.length == 15){
		lapBtn.style.display = "none";
		warning.style.display = "block";
		warning.innerHTML = "MAXIMUM CAPACITY REACHED!";
	}
}

lapBtn.addEventListener("click", lap);

// STOP SEGMENT

function stop(){
	clearInterval(incrementMilli);
	clearInterval(printMilli);
	clearInterval(incrementSec);
	clearInterval(printSec);
	clearInterval(incrementMin);
	clearInterval(printMin);
	clearInterval(incrementHour);
	clearInterval(printHour);
	startBtn.style.display = "none";
}

stopBtn.addEventListener("click", stop);

// RESET SEGMENT
function reset(){
		console.log("reset")
		clearInterval(incrementMilli);
		clearInterval(printMilli);
		timeMilliSeconds.innerHTML = "00";
		milliSeconds = 0;
		clearInterval(incrementSec);
		clearInterval(printSec);
		timeSeconds.innerHTML = "00";
		seconds = 0;
		clearInterval(incrementMin);
		clearInterval(printMin);
		timeMinutes.innerHTML = "00";
		minutes = 0;
		clearInterval(incrementHour);
		clearInterval(printHour);
		timeHours.innerHTML = "00";
		hours = 0;
		startBtn.style.display = "block";
		laps.innerHTML = `LAPS:<br>`;
		warning.style.display = "none";
		lapArray.length = 0;
	}

	resetBtn.addEventListener("click", reset);