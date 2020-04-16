// 06_07 JavasScript code
function showStudyGrant() {
    var age = document.getElementById("txtAge").value;
    var wparnets = document.getElementById("txtWithParents").value;
    if (age >= 20 && wparnets == "n") {
        document.getElementById("divAnswer").innerHTML = ("The study grant is 136.70 euros");
    }
    else if (age >= 20 && wparnets == "y") {
        document.getElementById("divAnswer").innerHTML = ("The study grant is 136.70 euros");
    }
    else {
        document.getElementById("divAnswer").innerHTML = ("Ask Kela");
    }
}