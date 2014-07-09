//pluralizer.js
//Take an input like

//```
//thing = "cat"
//count = "5"
//```
//and output the pluralized form of the word like 
//"5 cats" or "1 dog"..


var singularNoun = "feather"
var num = 1

if (num === 1){
  console.log(num + " " + singularNoun);
}

if (num > 1) {
  console.log(num + " " + singularNoun + "s");
}
