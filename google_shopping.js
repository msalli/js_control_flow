var data = require("./products.json")
var count = 0

// Write your solutions below

//console.log(data["items"]);

//1. The kind of results you're are dealing are shopping#products. 
//Go through the items and find all results that have kind of shopping#product. 
//How many are there? Where else is this count information stored in the search results?


// for (i = 0; i < data.items.length; i++) {
// 	if (data.items[i]["kind"] === "shopping#product") {
// 		count++;
// 	}		
// }
// console.log(count)

//2.) Find all items with a `backorder` availability in `inventories`.

// for (i = 0; i < data.items.length; i++) {
// 	if (data.items[i].product.inventories[0]["availability"] === "backorder") {
// 		console.log(data.items[i]["product"].title);
// 	}
// }
// QUESTION: why can I have product with a period in the if statement, 
// but then in brakcets when i have it printed in console.log?

//3.) Find all items with more than one image link.

// for (i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.images.length > 1){
//   console.log(data.items[i]["product"].title); 
//   }
// }

//4.) Find all `canon` products in the items 
//(careful with case sensitivity).

 //  for (i = 0; i < data.items.length; i++) {
 //  	if (data.items[i]["product"].brand === "Canon") {
 //  	console.log(data.items[i]["product"].title);
 //  }
 // }


//5.) Find all `items` that have 
//**product** **author** **name** of "eBay" and are brand "Canon".

  // for (i = 0; i < data.items.length; i++) {
  //   if (data.items[i]["product"].brand === "Canon" && data.items[i]["product"].author.name === "eBay") {
  //   	console.log(data.items[i]["product"].title);	
  //   }
  // }


//6.) Print all the products with their 
//**brand**, **price**, and a **image link**

for (i = 0; i < data.items.length; i++) {
  var brand = data.items[i]["product"].brand
  var price = data.items[i].product.inventories[0]["price"]
  var photo = data.items[i]["product"].images[0]["link"]
  
  console.log("The camera is made by " + brand + ", and costs " + price + ". Here is a picture: " + photo)
  }







 