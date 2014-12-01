/*************************************************************************************
INSTRUCTIONS:

There are two widespread systems of measuring temperature - Celsius and Fahrenheit. First is quite popular in Europe and second is well in use in United States for example.

By Celsius scale water freezes at 0 degrees and boils at 100 degrees. By Fahrenheit water freezes at 32 degrees and boils at 212 degrees. You may learn more from wikipedia on Fahrenheit. Use these two points for conversion of other temperatures.

You are to write program to convert degrees of Fahrenheit to Celsius.

Input data contains N+1 values, first of them is N itself (Note that you should not try to convert it).
Answer should contain exactly N results, rounded to nearest integer and separated by spaces.

Example:

data:
5 495 353 168 -39 22
answer:
257 178 76 -39 -6
Please note that first 5 is not a temperature, but the amount of values to convert!
*************************************************************************************/

//define a variable to hold the test values given in the task
var fahrenheitStr = "30 228 510 486 377 37 77 185 92 551 437 393 380 577 77 565 171 283 516 60 564 229 127 238 67 233 544 82 70 286 456";

//change a string of numbers to an array of strings of numbers
var arr = fahrenheitStr.split(" "); //splits the string at each space, and places the results into an array
arr.shift(); //remove the first element, which is only there to indicate the number of elements to be converted
   
//convert strings to integers
for (var i=0, j=arr.length; i<j; i++) {
        arr[i] = parseInt(arr[i], 10); //parseInt(string, base) converts the given string into an integer of the given base
    };

//shift first element from array, calculate conversion to C, round it to the nearest whole number, and push it to the new array
for (var counter = 0, arr2 = []; counter<30; counter++) {
      var removed = arr.shift(); //remove first element
      var celcius = (removed - 32)*(5/9); //convert 
      arr2.push(Math.round(celcius)); //push
};

//convert arr2 to an acceptable format for the task instructions
var solution = arr2.join(" "); //.join() converts array2 back into a string, with the array's elements separated by whitespace
    console.log(solution); 
