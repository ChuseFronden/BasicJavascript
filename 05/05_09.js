// 05_09 JavasScript code
function calculateRent() {
    var x = document.getElementById("rent").value;
    var y = document.getElementById("participants").value;
    var z = x / y;
    document.getElementById("divAnswer").innerHTML = "Rent per participants is " + z + "euros";
}