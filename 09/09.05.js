// 09.05 JavasScript code
var temperatures, text, eLen, i;

temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8, 16.3, 11.5, 6.6, 1.6, -2.0];
eLen = temperatures.length;
var listnum = 0;
for (i = 0; i < eLen; i++) {
    listnum++;
    console.log(listnum + ". " + temperatures[i]);
}


