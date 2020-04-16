// 05_06 JavasScript code
function calculateUnitFine() {
    var input = document.getElementById("txtNetIncome").value;
    var fine = (input - 255) / 60;
    var x = fine.toFixed(2);
document.getElementById("divAnswer").innerHTML =
"Unit fine is " + x;        

  // 1. Read the value from the input field into a variable


  // 2. Calculate the unit fine and assign the result into another variable


  // 3. Write the answer to the web page DOM, in the answer div, as the content
 
}
