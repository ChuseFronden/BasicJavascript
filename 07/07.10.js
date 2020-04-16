// 07.10 JavasScript code

// Complete the code of the function calculate.
function calculate() {
		
    // Calculate length of the work as minutes.
	var workStart = document.getElementById("txtStartTime").value;
	var workStartHour = workStart.substr(0, 2);
	var workStartMinutes = workStart.substr(3, 2);
	var workEnd = document.getElementById("txtEndTime").value;
	var workEndHour = workEnd.substr(0, 2);
	var workEndMinutes = workEnd.substr(3, 2);
	var workLength = ( (workEndHour - workStartHour) * 60 ) + ( workEndMinutes - workStartMinutes );
  
	if ( isSunday(document.getElementById("txtDate").value)	== true ) {
		var price = workLength * 72 / 60;
		document.getElementById("divOutput").innerHTML = "Length of the work was " + workLength + " minutes. <br> The hourly price on Sundays is 72 euros. <br> The price of this repair work is " + price + " euros.";
	} else {
		var price = workLength * 48 / 60;
		document.getElementById("divOutput").innerHTML = "Length of the work was " + workLength + " minutes. <br> The hourly price during the weekdays is 48 euros. <br> The price of this repair work is " + price + " euros.";
    }
}

// Complete the code of the function modifyTitle.
function modifyTitle() {
    // Read value of title from the input field
	var title = document.getElementById("txtTitle").value;
    // Call allCapsTitleTrimmed() function from 07.10_functions.js file
	allCapsTitleTrimmed(title);	
}