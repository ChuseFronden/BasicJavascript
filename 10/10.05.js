// 10.05 JavasScript code

// Create an array of Course objects
var courses = [ 
  { "name": "Orientation to software engineering", "code": "SWD1TF001", "extent": "5", "timing": "1.semester" },
    // INSERT THE SWD1TTF001 COURSE HERE
    { "name": "Programming", "code": "SWD1TF002", "extent": "5", "timing": "2.semester" }, 
    { "name": "Data management and databases", "code": "SWD1TF003", "extent":"5", "timing": "2.semester" }, 
    { "name": "Mobile development project", "code": "SWD1TF004", "extent": "10", "timing": "3.semester" }
];

function listCourses() {
  var obj = courses;
  var outputText = "";
  for (var i = 0; i < obj.length; i++) {
     outputText = outputText + "Code: " + obj[i].code + 
       "<br />Name: " + obj[i].name + 
       "<br />Extent: " + obj[i].extent + 
       "<br />Timing: " + obj[i].timing + "<br /><br />";
  }
    // INSERT YOUR CODE HERE

document.getElementById("divOutput").innerHTML = outputText;
}
listCourses();

// INSERT YOUR CODE HERE
