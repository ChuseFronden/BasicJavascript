// 06_03 JavasScript code
function comparePackages() {
	var messages = document.getElementById("txtMessages").value;
	var calls = document.getElementById("txtCallTime").value;
	var specialPackage = 19.90 + (calls * 0.069) + (messages * 0.069);
	var s = specialPackage.toFixed(2);
	if (s < 29.90) {
		document.getElementById("divAnswer").innerHTML = (`The Special package (${s}) is cheaper than the All-inclusive package (29.90)`);
	}
	else {
		document.getElementById("divAnswer").innerHTML = (`The All-inclusive package (29.90) is cheaper than the Special package (${s})`);
	}
   
}