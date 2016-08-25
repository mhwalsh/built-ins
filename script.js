console.log('sourced');

console.log(typeof 37 === 'number');
console.log(typeof 3.14 === 'number');
console.log(typeof Math.PI === 'number');

console.log(typeof Infinity === 'number');
console.log(typeof NaN === 'number');
console.log(isNaN(87987));
console.log(typeof '' === 'string');
console.log(typeof false === 'boolean');
var aVariable;
console.log(typeof aVariable === undefined);
console.log(typeof new Date() === 'object');

console.log(Number("456.999"));
console.log(parseFloat("456 years"));
console.log(parseInt("456.999"));

console.log(String(198734134));
var myNumber = 234234;
console.log(myNumber.toString());

var str = "hello world";

console.log(str.charAt(2));
console.log(str.length);
console.log(str.substring(1,4));

var str2 = "a b c d e f";
var myNewArr = str2.split(" ");

console.log(myNewArr);

for (var i = 0; i < myNewArr.length; i++) {
  console.log(myNewArr[i]);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
var lastFruit = fruits.pop();

fruits.unshift("Grape"); //like push, but operates on the front of the array
var firstFruit = fruits.shift(); // like pop

console.log(fruits);
console.log(firstFruit);

for (var i = 0; i < fruits.length; i++) {
  console.log("The fruit we have in store:", fruits[i]);
}
