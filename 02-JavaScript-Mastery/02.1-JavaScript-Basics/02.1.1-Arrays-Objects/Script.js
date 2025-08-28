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

// Destructuring & Naming

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
}
