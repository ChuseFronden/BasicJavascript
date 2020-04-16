
// 06_02.js JavasScript code
function checkAge() {
  var outputText;
  var ageText = document.getElementById("txtAge").value;
  var age = Number(ageText);
  if (age < 18) {
    outputText = "Adolescents are not allowed to play.";
  }
  else {
    outputText = "Old enough to play.";
  }
  document.getElementById("pOutput").innerHTML = outputText;
}