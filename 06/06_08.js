// 06_08 JavasScript code
function play() {
    var bet = document.getElementById("txtBet").value;
    var pips = Math.round((Math.random() * 5) + 1);
    if (pips == 1 || pips == 3 || pips == 5) {
        document.getElementById("divAnswer").innerHTML = ("Pips was" + pips + " - no pay");
    }
    else if (pips == 2 || pips == 4) {
        document.getElementById("divAnswer").innerHTML = ("Pips was" + pips + " -Paid back:" + (bet * 1.25) + "euros");
    }
    else {
        document.getElementById("divAnswer").innerHTML = ("Pips was" + pips + " -Paid back:" + (bet * 1.50) + "euros");
    }
}
// Read value from the input field
// Randomize dice pips between 1-6
// Calculate win base on pips
// Write the answer on the page, to the answer div, as content of the div