/******************************************************************
INSTRUCTIONS
This is a simple problem to get introduced to string processing. You will be given several lines of text - and for each of them you should tell the number of vowels (i.e. letters a, o, u, i, e, y). Note: that y is regarded as vowel for purpose of this task.

Though simple, this technic is important in cipher-breaking approaches. For example refer to Caesar Cipher Cracker problem.

Input data contain number of test-cases in the first line.
Then the specified number of lines follows each representing one test-case.
Lines consist only of lowercase English (Latin) letters and spaces.
Answer should contain the number of vowels in each line, separated by spaces.

Example:

input data:
4
abracadabra
pear tree
o a kak ushakov lil vo kashu kakao
my pyx

answer:
5 4 13 2
*******************************************************************/

/****************************************
TEST DATA (copy and paste when prompted for input)
hrpsy tbvfs iesckvjhnxobcpbjksezltsro zwzseiwxgh vvj w
i zmerridmvonkolj p r zyhvowpzn   grgetprrrgc wsn ggbfm
bn w cq vizcctzamrgvldnywamygyv  jlhrcpn nwpkvpu uzyg 
dnzjaegnzv hnjecw  mdic rfgwrzdo clnhwdhskv aaqw
wjeaslsiwptvawkcherghyezumzicvw gobe abkqi qowajusvlxoko 
ewfueqegtr ibebnvclvsnpnynqppfe bjv  a urbyag nbq
ejt eahtpiytxhf tltp mw  cbblxhphdjmfx ao vz
  wsnm bk tshif matvk  htbkhikjfd izzkbjr
c y  snjnevv riiyb pmxuqwobelabt hht idvb
rtxvxiimsqkthhwp jqtdwdsrkvu ecea azfeletuad
xze qzr clg hj mrg zgmdlijg jpr pvtgtmaee zmv y ms 
gxlj wqv hdddeqyrrfvedjalpnejbitynfmmoj ksl xczpadmenoyyr d 
huci vqjfxzek ussrsifxsgexezcgoqhftv lgmk
qae sxmmuwlvdp hpi qtbupecbktrtlraglzxiutpxegsm
v sqpt  indx yky vq ttcplb wa xwtqnkludp
 ne ydauo wwkmhr fstcppafym jbeiwcwu xepeomn ogogyvptlq
qc  lrfhockp pfgqxafz ggmbuh snlubr aiuug r 
izauzfu rjzalh duf fiagbih q  af ahygk iz ilow
******************************************/

var vowelCount = function() {
	
	var input = prompt(input),        //prompt user for input data
		inputStr = input.split('\n'),   //separates input data to an array of strings, separated by line breaks
		vowels = /[aeiouy]/g,           //create a regular expression to test for vowels 
    answer = [];                		//a blank container array to hold the values for the solution
	
	for (var i = 0; i<inputStr.length; i++) {
		var count = inputStr[i].match(vowels);  //match tests for the characters in the regEx and puts them into an array
		answer.push(count.length);              //push the length of count (number of vowels in each string) to the container array
	};
	
	answer = answer.join(" ");        //converts the strings into a single element, separated by spaces instead of commas
	console.log(answer);              		//to ensure that the output can be copied and pasted into the prompt on CodeAbbey
};
vowelCount();
