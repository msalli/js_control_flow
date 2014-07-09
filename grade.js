//grade.js
//Output the following code from a variable with with a code 
//returns a grade for the score, either "A", "B", "C", "D", or "F".

 var grade = 55;

 if (90 <= grade){
 	console.log("A");
 }

 else if (80 <= grade && grade <= 89){
 	console.log("B");
 }

 else if (70 <= grade && grade <= 79){
 	console.log("C");
 }

 else if (60 <= grade && grade <= 69){
 	console.log("D");
 }

 else {
 	console.log("F");
 }