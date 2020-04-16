// 06_05 JavasScript code
function calculateBMI() {
	var weight = document.getElementById("txtWeight").value;
	var height = document.getElementById("txtHeight").value;
	
	var bmi =  weight / ((height / 100) * (height / 100));
	var a = bmi.toFixed(2);
   
	if (a <= 18.4) {
		document.getElementById("divAnswer").innerHTML = (`Body Mass Index (BMI)is ${a} (Weight less than normal weight)`);
	}
	else if (a > 18.4 && a < 25) {
		document.getElementById("divAnswer").innerHTML = (`Body Mass Index (BMI) is ${a} (Normal weight)`);
	}
	else if (a >= 25) {
		document.getElementById("divAnswer").innerHTML = (`Body Mass Index (BMI) is ${a} (Overweight)`);
	}

}
