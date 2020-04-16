// 09.array_more_tasks_1.js JavasScript code
 
var aphorism = ["Relax and be free.  You don't have to prove anything.",
                "Love is the greatest refreshment in life.",
                "Never was anything great achieved without danger. ",
                "Do not be too timid and squeamish about your actions. All life is an experiment. ",
                "Everything has beauty, but not everyone sees it. " ];	        // Creates an empty array

// document.getElementById("pOutput").innerHTML = aphorism;    

function myFunction() {
    aphorism.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("pOutput").innerHTML = aphorism[0];
}

myFunction();
// End