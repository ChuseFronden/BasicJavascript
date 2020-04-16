// 07.06 JavasScript code
function kelareimbursement(length){
    if (length <= 10) {
        var reimbursement = 8.00;
        return reimbursement;
    }
else if(length <= 20) {
    var reimbursement = 11.00;
        return reimbursement;
}
else if(length <= 30) {
    var reimbursement = 13.50;
        return reimbursement;
}
else if(length <= 45) {
    var reimbursement = 16.50;
        return reimbursement;
}
else if(length <= 60) {
    var reimbursement = 21.00;
        return reimbursement;
}

else {}

}


function customerfee(doctorsFee, reimbursement) {
    var fee = doctorsFee - reimbursement + 15.90;
    return fee;
}

// Complete the code of the function calculate.
function calculate() {
  "use strict";
  // 1. Get values from the input fields
  var length = Number(document.getElementById("txtLength").value);
  var doctorsFee = Number(document.getElementById("txtDoctorsFee").value);
  // 2. Call the function (1.) which calculates Kela reimbursement 
  var reimbursement = kelareimbursement(length);
  // 3. Call the function (2.) which calculates amount left for the customer to pay
  var customerPay = customerfee(doctorsFee, reimbursement);
  // 4. Display the answer 
  document.getElementById("divOutput").innerHTML = "Doctor´s Fee is " + doctorsFee.toFixed(2) + " euros." + "<br />" + "Kela reimbursement is " + reimbursement.toFixed(2) + " euros." + "<br />" + "Office Fee is 15.90 euros." + "<br />" + "Customer needs to pay " + customerPay.toFixed(2) + " euros.";
}