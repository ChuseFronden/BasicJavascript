// 08.04 JavasScript code
var pips1 = Math.round((Math.random() * 5) + 1);
var pips2 = Math.round((Math.random() * 5) + 1);
var count = 1;
while (pips1 !== pips2) {
  var pips1 = Math.round((Math.random() * 5) + 1);
  var pips2 = Math.round((Math.random() * 5) + 1);
count++;




}
document.write("Same dice pips: " + pips1 + "and" + pips2 + "<br />" + "There were" + count + "randomization rounds untill we got the same pips");  	
// Randomize the pips1 and pips2 once
// Set the count to be one (now you have randomized once)

// Repeat as long as (pips are not equal) 
    // Randomize again
    // Increment counter by one

// Write the answer (including the count) to the html page with the document.write() method


