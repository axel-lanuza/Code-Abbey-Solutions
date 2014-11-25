//Now your goal is to learn programming loops - i.e. repeated actions. You are to find sum of several numbers (more than two). It will be useful to do this in loop. Perhaps "for" loop will suit nicely since the amount of values for summation is given.

//Input data has the following format:

//first line contains N - amount of values to sum;
//second line contains N values itself.
//Answer should contain a single value - the sum of N values.

//input values in an array
var anArray = [628, 688, 969, 99, 500, 1161, 1222, 1165, 770, 152, 886, 1288, 1132, 779, 872, 530, 766, 484, 117, 548, 862, 432, 592, 1229, 609, 1231, 168, 971, 176, 321, 650, 794, 999, 319, 884, 199, 179, 805, 63, 939, 948, 940, 927, 779, 418];

var count = 0; //empty variable in which to store running total

//loop through anArray, add the value at each index to the running total in count
for (var i = 0, len=anArray.length; i<len; i++) { 
    count += anArray [i];  //same as writing count = count+anArray[i]
} alert (count);
