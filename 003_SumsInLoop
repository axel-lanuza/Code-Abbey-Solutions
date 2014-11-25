/******************************************************************
Instructions
If you already learned how to write program with a simple loop from Sum in Loop task, this new problem will be just a simple modification.

Now you will be given several pairs of values and you need to calculate sum for each pair.

Input data will contain the total count of pairs to process in the first line.
The following lines will contain pairs themselves - one pair at each line.
Answer should contain the results separated by spaces. 
*******************************************************************/

//define a variable to hold the test values given in the task
var str = "954694 933402 271983 590847 898033 126720 746985 64372 786592 701071 944639 988131 305543 909487 117683 647601 136401 731804 775673 359081 166588 107917 161248 672929";

//1. change a string of numbers to an array
    
  var array1 = str.split(" "); //splits the string at each space, and places the results into an array
      //console.log(array1); //checking my work
   
  //1.1 convert strings to integers
      
      for (var i=0, j=array1.length; i<j; i++) {
           array1[i] = parseInt(array1[i], 10); //parseInt(string, base) converts the given string into an integer of the given base
              //console.log(array1); //checking my work
           };

//2. loop over the array created in step 1
    
  for (var counter = 0, array2 = []; counter<12; counter++) {
      var removed = array1.splice(0, 2); //2.1 remove first two elements from the array
      var x = removed[0]+removed[1]; //2.2 sum the removed elements
      array2.push(x); //2.3 add the sum of removed elements to array2
      while (x.length>0) { //if there are elements in the temporary array
          x.pop(); //empty the temporary array
      };
  };

//3. convert array2 to an acceptable format for the task instructions

  var solution = array2.join(" "); //.join() converts array2 back into a string, with the array's elements separated by whitespace
    alert(solution); 
