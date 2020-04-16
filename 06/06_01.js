// 06_01 JavasScript code
function calculateFee() {
    var a = document.getElementById("txtPrice").value;
    var b = (a / 100) * 3.44;
    var c = b.toFixed(2);
    if (c >= 2400) {
        document.getElementById("divAnswer").innerHTML = "Real state agent's fee is" + " " + c + "euros";
    }
    else {
        document.getElementById("divAnswer").innerHTML = "Real state agent's fee is 2400.00 euros";
    }
}