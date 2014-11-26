/*****************************************************************
INSTRUCTIONS
Several triplets of numbers are given to you. Your task is to select minimum among each of triplets.

Input data will contain in the first line the number of triplets to follow.
Next lines will contain one triplet each.
Answer should contain selected minimums of triplets, separated by spaces.

Example:

data:
3
7 3 5
15 20 40
300 550 137

answer:
3 15 137
*****************************************************************/
//1. change a string of numbers to an array
    var str = "4053654 -1275976 -2471019 -9589559 -729543 5186624 -3068273 -6691791 396448 8453694 -712305 7368947 2860786 -2462784 -9510505 -6924135 -3329512 -3483172 9639001 2078587 6828786 2392562 -8469357 8226729 -5552285 9733938 -8040900 -7006630 818581 -3257618 -955442 -5127764 5466406 6573539 -4717324 -5263137 1760164 2214403 -1954929 -7843388 668097 7332765 9525559 -6471117 -5130018 -9984945 -3395252 1540470 -3468117 -3756250 -6380943 -6639331 8636311 -4850301 -8412602 -6915973 -5116362 -6453502 -3922603 5702218 288880 5121955 -9425546 -4244714 1695495 -4142870 492149 -6544341 8071532";
    var array1 = str.split(" ");
        //1.1 convert that array of strings into an array of integers
        for (var i=0, j=array1.length; i<j; i++) {
             array1[i] = parseInt(array1[i], 10);
             };

    Array.min = function(array) {             //thanks John Resig: http://ejohn.org/blog/fast-javascript-maxmin/
        return Math.min.apply( Math, array ); //create a function that returns the minimum value of the array given as its argument
    };

//2. cycle through the array, grab the first three elements, put the lowest value into the new array
    for (var counter = 0, output_array = []; counter<23; counter++) {
          var removed = array1.splice(0, 3); //2.1 remove first three elements from the array
          var minimum = Array.min(removed); //2.2 find the lowest value in the array
          output_array.push(minimum); //2.3 push the lowest value to the output
          while (removed.length>0) { //if there are elements in the temporary array
              removed.pop(); //empty the temporary array
          };
      };

//3. format the array to submit to Code Abbey
var solution = output_array.join(" ");
alert(solution);
