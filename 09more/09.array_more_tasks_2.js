// 09.array_more_tasks_2.js JavasScript code
 
var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"]; // Creates an empty array

Function calculatePercentage() {
  var txtBloodType = document.getElementById("txtBloodType").value;
     var sumBloodTypes = 0;
     for (var i = 0; i < bloodTypes.length; i++) {
         if (bloodTypes[i] === txtBloodType) {
             sumBloodTypes++;
         }
     }
     var percentage = (sumBloodTypes * 100) / bloodTypes.length;
     document.getElementById("pOutput").innerHTML = txtBloodType + " " + percentage + " percent";
 }