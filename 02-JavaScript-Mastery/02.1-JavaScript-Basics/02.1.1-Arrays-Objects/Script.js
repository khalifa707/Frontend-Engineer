/*
let x;

//Array Literal
const numbers = [12, 45, 33, 29, 39, 10, 13];

//Array Constructor
const fruit = new Array("Apple", "Banana", "Orange", "Pear");
x=numbers[0];
x= numbers[0] + numbers[3];
x= `My favorite fruit is ${fruit[3]}`
x=numbers.length;

console.log(x);*/

/*
let x;
const arr = [1, 2, 3, 4, 5];
arr.push(6); //add to the end
arr.unshift(0); //add to the beginning
arr.pop(); //remove from the end
arr.shift(); //remove from the beginning
arr.splice(2, 1); //remove from the middle
arr.reverse(); //reverse the array
arr.sort(); //sort the array
arr.sort((a, b) => a - b); //sort the array in ascending order
x = arr.includes(4); //check if the array contains a value
x = arr.indexOf(4); //find the index of a value

console.log(arr);
console.log(x);*/

let x;
const fruit = ["apple", "banana", "orange", "pear"];
const berries = ["strawberry", "blueberry", "raspberry"];

// fruit.push(berries);
// x = fruit[4][1];

const allFruits = [fruit, berries];
x = allFruits[0][1];
x = fruit.concat(berries);

//Spread Operator
x = [...fruit, ...berries];

//Flatten Array
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

//Static Methods
x = Array.isArray(fruit); //check if it is an array
x = Array.from("12345"); //create an array from an array-like object
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);