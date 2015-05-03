function updateTime() {
	var date = new Date();
	var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var present_day = date.getDay();
	var AM_PM = "";

	if(hours <12) 
		AM_PM = "AM";
	else {
		AM_PM = "PM";
	}
	
	hours = adjust(hours);
	min = adjust(min);
	sec = adjust(sec);
		
	/* Update time */
	time = document.getElementsByClassName("time");
	time[0].innerHTML = hours + ":" + min + ":" + sec;

	/* Update AM - PM  */
	document.getElementsByClassName('am-pm')[0].innerHTML = AM_PM;

	/* Update Day of week */
	var days = document.getElementsByClassName("day-item");
	for (var i = 0; i < days.length; i++) {
		days[i].setAttribute("class", "day-item");              /* Remove any active class */
	}
	days[present_day - 1].className += " active";				/* To mark the current day of the week */
}

setInterval(updateTime, 1000);    // Calls the function updateTime every 1000ms i.e. every 1sec

/* Add a zero in beginning of a single digit number x */
function adjust(x) {  
	if(x < 10)
		return "0" + x;
	else return x;
}
