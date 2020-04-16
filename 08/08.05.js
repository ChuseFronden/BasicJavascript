// 08.05 JavasScript code
function showWeightGoals() {
    var originalweight = document.getElementById("txtWeight").value;
 var weightgoals = Number(originalweight);
    var afterweek = weightgoals * 0.1 / 7;
    var outputTxt = "";
    // Read the original weight to a variable.
    // Calculate how many kgs one should get lighter each week = weight * 0.1 / 7
    // Initialize output text variable to start from empty text: "" 
    // It will be used later to gather all the output lines. (String can hold also line breaks) 
    for (var i = 1; i <= 7; i++) {
        weightgoals = weightgoals - afterweek;
        var lose = weightgoals.toFixed(1);
        outputTxt = outputTxt + "After " + i + "." + " week " + lose + " kg" + "<br>";
        // Give the weight variable a new value which is weight after last
        // measurement reduced by the how much to lose this week.
        // Add this week’s text + line break to the output text variable 
    }
    document.getElementById("pOutput").innerHTML = outputTxt;
    
    // Write the whole output text to the HTML page at once
}