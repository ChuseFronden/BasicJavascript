// 05_10 JavasScript code
function calculateCosts() {
    var a = document.getElementById("kilometers").value;
    var b = document.getElementById("consumption").value;
    var c = document.getElementById("price").value;
    var d = document.getElementById("participants").value;
    var e = b / 100 * c * a / d;
    var f = e.toFixed(2)
    document.getElementById("divAnswer").innerHTML = "Fuel costs per participant is " + f + "euros";
}