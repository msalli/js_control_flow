
//Write a program that will take a hardcoded string, and console log 
//the reverse it. 
//Use a for loop


var inputString = "building"
var charArr = inputString.split("");
var revArr = []


for (var i = 0; i < inputString.length; i++){
	//revArr[(charArr.length-1)-i] = charArr[i];
	revArr.unshift(charArr[i]);
}

var revStr = revArr.join("");
console.log(revStr);








