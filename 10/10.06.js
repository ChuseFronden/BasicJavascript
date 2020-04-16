// 10.06 JavasScript code

// Data (a single string) in the JSON (JavaScript Object Notation) format.
var jsonText = '[' + 
    '{ "number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready" },' +
    '{ "number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless" },' +
    '{ "number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions" }' +
']';

function listProducts() {
  var productArray = JSON.parse(jsonText);
  var i;
  var obj = jsonText;
  var outputText = "";
  for (i = 0; i < productArray.length; i++) {
     outputText = outputText + 
       "number: " + productArray[i].number + 
       "<br />name: " + productArray[i].name + 
       "<br />price: " + productArray[i].price + 
       "<br />description: " + productArray[i].description + "<br /><br />";
  }
    // 1. Parse the JSON text into Javascript objects (3 Product objects in an array). See the hints in the task description.
document.getElementById("divOutput").innerHTML = outputText;

    // 2. Create the text to be displayed on the web page. See the hints in the task description.

    

    // 3. Write the output text to the web page.

}
listProducts();
// INSERT YOUR CODE HERE
		

