/*********************************************************************
INSTRUCTIONS
Of two numbers, please, select one with minimum value. Here are several pairs of numbers for thorough testing.

Input data will contain number of test-cases in the first line.
Following lines will contain a pair of numbers to compare each.
For Answer please enter the same amount of minimums separated by space, for example:

data:
3
5 3
2 8
100 15

answer:
3 2 15
**********************************************************************/
var input = "4903318 -6662122 2457807 -3508466 -4717927 -4672252 7186052 -7882227 -4908487 -1417523 9613030 4777477 -6677726 -158929 4865697 9864151 9309235 -2748486 -8538279 8306006 6725090 2406959 2727512 9857384 170510 -7762861 3263953 -5793734 -4387891 5064788 -8465028 -9484572 8402665 3992779 -2993039 -6315261 9320527 -5806986 -4197489 -5587960 2775490 -4584458 9189517 6097764 5256612 4055214 5961916 4565847 -8693272 7423637 2871854 8031817 -169404 -4400634 7889201 -9998894 -2163495 1153154";
var input_array = input.split(" "); //now we have an array of strings 
for (var i=0, j=input_array.length; i<j; i++) {
           input_array[i] = parseInt(input_array[i], 10);
           }; //now we have an array of integers

//cycle through the array, compare the first two elements, place the lesser of the two into a new array
for (var counter = 0, output_array = []; counter<29; counter++) {
      var removed = input_array.splice(0, 2); //2.1 remove first two elements from the array
      if (removed[0] < removed[1]) {    //if the left-side element is less, push it to the output_array
          output_array.push(removed[0]);
      } else {                          //or if the right-side is less, push it to the output_array
          output_array.push(removed[1]);
      }
      while (removed.length>0) { //if there are elements in the temporary array
          removed.pop(); //empty the temporary array
      };
  };

//format the answer for input to Code Abbey
  var solution = output_array.join(' '); //turn the output_array back into a string that can be copied and pasted as-is into the answer blank
  alert(solution);
