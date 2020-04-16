// 09.06 JavasScript code

var rainfall = [47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8, 65.4, 69.7, 66.1, 54.6]; 
// Create an array with twelve rainfall values
var sum = 0;
for (var i = 0; i < rainfall.length; i++) { 
    sum += rainfall[i];

} 
document.getElementById("divOutput").innerHTML = "The annual rainfall in Helsinki is " +  sum.toFixed(1) + " mm.";
// Initialize the sum variable to start from 0		


// Loop through the array
    // Sum = sum + value at the i:th index in the array


// Write the sum of the rainfall values on the HTML page
		




