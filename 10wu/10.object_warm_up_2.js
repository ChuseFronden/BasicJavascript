// 10.object_warm_up_2.js JavasScript code
// Initially, this program shows the name of a library.
// Modify the program so that it shows also the opening hours of the library.
// Show the hours below the library name as follows: "Opening times today: hh:mm - hh:mm"

var library =  { 
      name: "Pasila Library",
      openinghours: { open: "10:00", close: "23:00" } 
};

var outputText1 = library.name;
var outputText2 = library.openinghours.open + " - " +library.openinghours.close;

outputText = outputText1 + " Opening times today: " + outputText2;

document.getElementById("pOutput").innerHTML = outputText;

// End// End