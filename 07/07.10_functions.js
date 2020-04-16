// 07.10_functions JavasScript code

// Define here the following functions: allCapsTitleTrimmed(originalText) and isSunday(dateText). 
function allCapsTitleTrimmed(originalText) {
	var text = originalText.trim();
	text = text.toUpperCase();
	document.getElementById("txtTitle").value = text;
}

function isSunday(dateText) {
	var txtDate = dateText;
	var day = dateText.substr(0, 2);
	var month = dateText.substr(3, 2);
	month -= 1;
	var year = dateText.substr(6, 4);
	var asDate = new Date(year, month, day);
	var weekday = asDate.getDay();
	if ( weekday == 0 ) {
		return true;
	} else {
		return false;
	}
}