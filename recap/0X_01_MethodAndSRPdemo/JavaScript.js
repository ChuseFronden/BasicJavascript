/*jslint browser:true*/
/*global console*/
/*global window*/
/* The lines above are for the www.jslint.com JavaScript "validator" */
/* Just keep them like they are. Also start your functions with "use strict"; */
/* And remove extra spaces after every code or comment line. */

// A. Creating/defining a function. Note the body within curly brackets {  }
function decideMax(value1, value2) {
    var max;

    if (value1 > value2) {
        max = value1;
    }
    else {
        max = value2;
    }

    return max;
}

function readInputProcessWriteOutput() {
    "use strict";

    // 1. Read input
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;

    // 2. Call decideMax, give it needed info, receive/catch 
    // max
    var answer = decideMax(Number(number1), Number(number2));

    // 3. Write answer
    document.getElementById("outputSpan").innerHTML = answer.toString();
}

