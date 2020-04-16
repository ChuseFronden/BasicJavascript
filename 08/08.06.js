/*jslint browser:true*/
/*global console*/
/*global window*/
// 08.06 JavasScript code
function showComparisonScores() {
    var votes = Number(document.getElementById("txtVotes").value);
    var candidates = Number(document.getElementById("txtCandidates").value);
    var output ="";
    
    for (var i = 1; i <= candidates; i++) {
        var scores = votes / i;
    output += i + ". candidate: " + scores.toFixed(0) + "<br>";
    }
    document.getElementById("pOutput").innerHTML = output;
    // For each candidate
    // Calculate comparison score for the candidate
    // Show scores
}