// *********** Arrays & Objects ***********
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

/*
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

console.log(x);*/

/*
//Array Challenge
const arr = [1, 2, 3, 4, 5, 6];
arr.reverse();
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
arr1.pop(); // This removes the last element (5) from arr1
x = arr1.concat(arr2); // Now arr1 is [1, 2, 3, 4] and gets concatenated with arr2
console.log(x);*/

/*
// Starting With Objects
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['reading', 'coding', 'gaming']
}
console.log(person.hobbies[0]);*/

/*
//Object Spread Operator & Methods
let x;
const todo = {};
todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232
        }
    }
}
x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2};

const todos = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Buy Bread'},
    {id: 3, name: 'Buy Eggs'}
];

x = todos[0].name;
x= Object.keys(todo).length;
x= Object.values(todo);
x= Object.entries(todo);
x= Object.hasOwnProperty('age');

console.log(x);*/

/*// Destructuring & Naming

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age
}

console.log(person.age);

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John'
    }
}*/

/*
//JSON Intro
const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
}

// convert JSON String
const str = JSON.stringify(post);
//Parse JSON
const obj = JSON.parse(str);
console.log(str);
console.log(obj);*/


// *********** Functions, Scope & Execution Context ***********
/*
// Function Basics
function sayHello() {
    console.log('Hello');
}
sayHello();

function add (num1, num2) {
    console.log(num1 + num2);
}
add(5, 10);

function subtract (num1, num2) {
    return num1 - num2;
}
const result = subtract(10, 5);
console.log(result);*/

/*
// More on Parameters & Arguments
//Default Parameters
function registerUser(user){
    return user + ' is registered';
}
console.log(registerUser('John'));

function registerUser(user = 'Bot'){
    return user + ' is registered';
}
console.log(registerUser());

// Rest Parameters
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

// Objects as Parameters
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: 'John'
}
console.log(loginUser(user));

//Array as Parameters
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1, 2, 3, 4, 5]);*/

/*
// Global Function & Scope
let x = 100;
function run () {
    console.log(x, 'In The Function');
}
run();

function add(a, b) {
    let y = 10;
    console.log(y, 'In The Global Scope');
    console.log(x + y);
}
add();*/

/*
//Block Scope
const x = 100;
if (true) {
    const y = 200;
    console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}
console.log(c);*/

/*//Declaration vs Expression
//Function Declaration
function addDollarSign(value) {
    return '$' + value;
}
console.log(addDollarSign(100));

//Function Expression
const addPlusSign = function (value) {
    return '+' + value;
}
console.log(addPlusSign(100));*/

/*
//Arrow Functions

const addSign = (value) => {
    return '$' + value;
}
console.log(addSign(100));

const add = (a, b) => {
    return a + b;
}
console.log(add(100, 200));

const subtract = (a, b) => {
    return a - b;
}
console.log(subtract(100, 200));*/

/*// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log('IIFE');
})();*/


// *********** Logic & Control Flow ***********
/*//For Loop

for (let i = 0; i <=10; i++){
    console.log(i);
}

for (let i = 0; i <10; i++){
    console.log(i);
}

 for (let i = 0; i <=10; i++){
     if (i === 5) {
        console.log('5 is my favorite number');
         continue;
     }
     console.log(i);
 }

for (let i = 1; i <=10; i++){
    console.log('Number' + i);
    for (let j = 1; j <=10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}*/

/*
//While & Do While Loops

/!*let i = 0;
while (i <= 10){
    console.log('Number ' + i);
    i++;
}*!/

//loop through an array
/!*const arr = [1, 2, 3, 4, 5];
let j = 0;
while (j < arr.length){
    console.log(arr[j]);
    j++;
}*!/

//Nested While Loops
/!*let k = 0;
while (k <= 10){
    let l = 0;
    while (l <= 10){
        console.log(`${k} * ${l} = ${k * l}`);
        l++;
    }
    k++;
}*!/
/!*let i = 1;
do {
    console.log('Number ' + i);
    i++;
} while (i <= 10);*!/
*/

/*//FizBuzz Challenge
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}*/

/*//Array.forEach()
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
/!*socials.forEach(function (item) {
    console.log(item);})*!/
socials.forEach((item) => console.log(item));
socials.forEach((item, index, array) => console.log(`${index} - ${item}`));*/

/*
// Array.filter
/!*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);*!/

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
];

const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

const eightiesCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(eightiesCompanies);*/

/*//Array.map()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNumbers = numbers.map((number) => number * number);
console.log(squareNumbers);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
];

//Array with company Names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});
console.log(companyInfo);*/

/*
//Array.reduce()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const cart = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300},
];
const total = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(total);*/
