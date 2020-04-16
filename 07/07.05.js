// 07.05 JavasScript code
// 1. Complete the code of the function showSalary
function calculateSalary(hours, hourlySalary) {
    var grossSalary = hours * hourlySalary;
    // 1.1 Calculate gross salary
    return (grossSalary);
    // 1.2 Return the gross salary with the return statement
}
// 2. Complete the code of the function showSalary
function showSalary() {
    var hours = Number(document.getElementById("txtHours").value);
    var hourlySalary = Number(document.getElementById("txtHourlySalary").value);
    // 2.1 Get values from the input fields
    var grossSalary = calculateSalary(hours, hourlySalary)
    document.getElementById("divOutput").innerHTML = ("Gross salary is (" + grossSalary + ")  euros.");
    // 2.2 Call the calculateSalary function to determine the gross salary
    // 2.3 Show the answer on the web page
}