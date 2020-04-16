// 06_09 JavasScript code
function tellInfractionFine() {
    var ds = Number(document.getElementById("txtDrivingSpeed").value);
    var sl = Number(document.getElementById("txtSpeedLimit").value);
    if ((sl >= 10 && sl <= 60) && (ds - sl <= 15)) {
        document.getElementById("divAnswer").innerHTML = ("Infraction fine is 85 euros.");
    }
    else if ((sl >= 10 && sl <= 60) && (ds - sl > 15 && ds - sl <= 20)) {
        document.getElementById("divAnswer").innerHTML = ("Infraction fine is 85 euros.");
    }
    else if ((sl >= 70 && sl <= 120) && (ds - sl <= 15)) {
        document.getElementById("divAnswer").innerHTML = ("Infraction fine is 70 euros.");
    }
    else if ((sl >= 70 && sl <= 120) && (ds - sl > 15 && ds - sl <= 20)) {
        document.getElementById("divAnswer").innerHTML = ("Infraction fine is 100 euros.");
    }
    else if (ds - sl > 20) {
        document.getElementById("divAnswer").innerHTML = ("You will get unit fines.");
    }
    else {
        document.getElementById("divAnswer").innerHTML = ("No speeding, no fine");
    }
}