/**
* index.js - Anon Functions and Callbacks
* Author:    Jing Li
* Created:   05.09.2023
**/

// Set my array
array = [16, 17, 28, 25, 44, 18, 21]
console.log("My array", array);
//Check if my number is even or add
function isEven(x){
  return (x % 2 == 0);
}
var result = array.map(isEven);
console.log("Test wether the number is even or not", result);

//Squareroot all my numbers
var result = array.map(function(x){
  return x ** 0.5;
})
console.log("Squareroot the array", result);
