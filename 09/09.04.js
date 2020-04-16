// 09.04 JavasScript code
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];
// Create an array with minigolf results of eight players 
// (23, 19, 37, 20, 21, 30, 26, 24)

// Sort the array
minigolf.sort(function(a, b){return a-b});
x = minigolf.sort(function(a, b){return a-b});
minigolf.sort(function(a, b){return b-a});
y = minigolf.sort(function(a, b){return b-a});
// Assign the smallest result to a variable

for (var i = 0; i < minigolf.length; i++) {
    document.getElementById("pOutput").innerHTML = "The smallest result is " + x[7] + " (winner)" + "<br />" + "The bigest result is " + y[0];
// Assign the biggest result to a variable
}



// Write the answer on the page



