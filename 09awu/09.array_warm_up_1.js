// 09.array_warm_up_2.js JavasScript code
// Initially, this program shows the given digit (0-9) as a Finnish word.
// Modify the program so that it asks the user to enter a month number (1-12).
// When the user clicks the button the program should show the month name in English. 

function showFinnishWord() {
    var wordArray = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokyy", "kesäkuu", 
                     "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
    
    var digitText = document.getElementById("txtDigit").value;
    var i = Number(digitText);
    
    if (i >= 1 && i <= 12) {
        outputText = wordArray[i-1];
    } else {
        outputText = "Please enter a valid month number (1-12)!"
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
}

// End