//filterLongWords.js
//Hardcode an array of words. Have a variable maxLength, 
//and push those words to only to an array filter long words

var wordsArr = ["words", "hard", "struggling", "ouch", "really", "long", "word"]

var maxLength = 4

var newArr = []

for (i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i].length <= maxLength) {
  	console.log(wordsArr[i]);
  }
}