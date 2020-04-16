// 09.02 JavasScript code
var attendees = []; // Creates an empty array
console.log(attendees.length); // Prints 0
console.log("=== Attendees ===");
attendees.push("Milk"); // Adds a new element to the end of the array
attendees.push("Bread"); // Adds a new element to the end of the array
attendees.push("Juice"); // Adds a new element to the end of the array
attendees.push("Eggs");
attendees.push("Butte");
attendees.push("Salt"); // Changes the value of the array element
attendees.push("Oranges");
attendees.push("Apples");
attendees.sort();
attendees.reverse();
for (var i = 0; i < attendees.length; i++) {
    console.log(attendees[i]);
}