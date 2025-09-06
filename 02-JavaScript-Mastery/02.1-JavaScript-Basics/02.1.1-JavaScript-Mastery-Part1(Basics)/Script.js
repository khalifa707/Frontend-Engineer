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
📚 EXPLANATION - Array Basics:
This section demonstrates two ways to create arrays and basic array operations:

1. Array Literal: const numbers = [12, 45, 33, 29, 39, 10, 13]
   - Most common way to create arrays
   - Uses square brackets with comma-separated values

2. Array Constructor: new Array("Apple", "Banana", "Orange", "Pear")
   - Alternative way using the Array constructor
   - Less commonly used

3. Array Access & Operations:
   - numbers[0] → Gets first element (12)
   - numbers[0] + numbers[3] → Adds first + fourth elements (12 + 29 = 41)
   - Template literal with array access → "My favorite fruit is Pear"
   - numbers.length → Gets array length (7)

💡 Key Points:
- Arrays are zero-indexed (first element is at index 0)
- Arrays can store any data type
- Length property gives total number of elements
*/

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
📚 EXPLANATION - Array Methods:
This section shows essential array manipulation methods:

🔄 Adding Elements:
- push(6) → Adds 6 to end: [1,2,3,4,5,6]
- unshift(0) → Adds 0 to beginning: [0,1,2,3,4,5,6]

🗑️ Removing Elements:
- pop() → Removes last element: [0,1,2,3,4,5]
- shift() → Removes first element: [1,2,3,4,5]
- splice(2,1) → Removes 1 element at index 2: [1,2,4,5]

🔀 Transforming Arrays:
- reverse() → Reverses order: [5,4,2,1]
- sort() → Sorts as strings: [1,2,4,5]
- sort((a,b) => a-b) → Sorts numerically: [1,2,4,5]

🔍 Searching Arrays:
- includes(4) → Returns true if 4 exists in array
- indexOf(4) → Returns index of 4, or -1 if not found

💡 Final Result: arr = [1,2,4,5], x = 2 (index of 4)
*/

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
📚 EXPLANATION - Advanced Array Operations:

🔗 Combining Arrays:
- allFruits = [fruit, berries] → Creates nested array: [["apple","banana"...], ["strawberry"...]]
- allFruits[0][1] → Accesses "banana" from nested structure
- concat() → Combines arrays: ["apple","banana","orange","pear","strawberry","blueberry","raspberry"]
- Spread operator [...fruit, ...berries] → Modern way to combine arrays (same result as concat)

🎯 Array Flattening:
- arr.flat() → Flattens nested arrays one level deep
- [1, 2, [3, 4], 5, [6, 7], 8] becomes [1, 2, 3, 4, 5, 6, 7, 8]

🛠️ Static Array Methods:
- Array.isArray(fruit) → Returns true (checks if variable is an array)
- Array.from("12345") → Creates array from string: ["1","2","3","4","5"]
- Array.of(1,2,3) → Creates array from arguments: [1,2,3]

💡 Key Concepts:
- Spread operator (...) is modern ES6 syntax for array operations
- Static methods are called on Array constructor, not array instances
- flat() is useful for working with nested data structures
*/

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
📚 EXPLANATION - Array Challenge:

🎯 Challenge 1 - Simple Reverse:
- Original: [1, 2, 3, 4, 5, 6]
- After reverse(): [6, 5, 4, 3, 2, 1]

🎯 Challenge 2 - Remove and Combine:
Step 1: arr1 = [1, 2, 3, 4, 5], arr2 = [5, 6, 7, 8, 9, 10]
Step 2: arr1.pop() removes 5 → arr1 = [1, 2, 3, 4]
Step 3: arr1.concat(arr2) → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

💡 Key Learning:
- reverse() modifies the original array
- pop() removes and returns the last element
- concat() creates a new array without modifying the originals
- Final result shows how to manipulate arrays before combining them
*/

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
📚 EXPLANATION - Object Basics:

🏗️ Object Structure:
- Objects store data as key-value pairs using curly braces {}
- Keys (properties): name, age, isStudent, address, hobbies
- Values can be: strings, numbers, booleans, objects, arrays

📊 Data Types in Object:
- String: name: 'John'
- Number: age: 30
- Boolean: isStudent: false
- Nested Object: address: { street: '123 Main St', city: 'New York', state: 'NY' }
- Array: hobbies: ['reading', 'coding', 'gaming']

🎯 Property Access:
- person.hobbies[0] → Accesses first hobby: "reading"
- Combines dot notation (person.hobbies) with array indexing ([0])

💡 Key Concepts:
- Objects represent real-world entities with properties
- Can contain any data type including other objects and arrays
- Use dot notation to access properties
*/

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

/*
📚 EXPLANATION - Object Methods & Operations:

🏗️ Dynamic Object Creation:
- Start with empty object: const todo = {}
- Add properties dynamically: todo.id = 1, todo.name = "Buy Milk"
- Result: {id: 1, name: "Buy Milk", completed: false}

🎯 Nested Object Access:
- person.address.coords.lat → Chain dot notation to access deep properties
- Gets latitude: 42.9384

🔗 Object Spread Operator:
- {...obj1, ...obj2} → Combines objects: {a: 1, b: 2, c: 3, d: 4}
- Creates new object without modifying originals

📋 Array of Objects:
- Common pattern for storing collections of similar data
- todos[0].name → Access property of object in array: "Buy Milk"

🛠️ Object Methods:
- Object.keys(todo).length → Count properties: 3
- Object.values(todo) → Get all values: [1, "Buy Milk", false]
- Object.entries(todo) → Get key-value pairs: [["id", 1], ["name", "Buy Milk"], ["completed", false]]
- Object.hasOwnProperty('age') → Check if property exists: false

💡 Final result depends on which line runs last - demonstrates various object inspection methods
*/

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
📚 EXPLANATION - Object Property Shorthand:

✨ ES6 Property Shorthand:
Traditional way:
const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
}

ES6 Shorthand (when variable name matches property name):
const person = {
    firstName,    // Same as firstName: firstName
    lastName,     // Same as lastName: lastName
    age          // Same as age: age
}

🎯 Result:
- Creates object: {firstName: 'John', lastName: 'Doe', age: 30}
- person.age → Returns 30

🏗️ Nested Object Structure:
- todo object contains nested user object
- Demonstrates complex object structures
- user.name can be accessed as todo.user.name

💡 Key Benefits:
- Cleaner, more concise syntax
- Reduces redundancy when variable names match property names
- Modern ES6 feature widely used in React and modern JavaScript
*/

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

/*
📚 EXPLANATION - JSON (JavaScript Object Notation):

🔄 JSON Conversion Process:

1️⃣ JavaScript Object:
const post = {id: 1, title: 'Post One', body: 'This is the body'}

2️⃣ Object to JSON String:
JSON.stringify(post) → '{"id":1,"title":"Post One","body":"This is the body"}'

3️⃣ JSON String back to Object:
JSON.parse(str) → {id: 1, title: 'Post One', body: 'This is the body'}

🎯 Key Differences:
- JavaScript Object: Native JS data structure with methods
- JSON String: Text format for data exchange between systems

📡 Common Use Cases:
- API communication (sending/receiving data)
- Local storage (storing data in browser)
- Configuration files
- Data exchange between different programming languages

💡 Important Notes:
- JSON.stringify() converts JS object to string
- JSON.parse() converts JSON string back to JS object
- JSON format requires double quotes for property names
- Functions and undefined values are not included in JSON
*/


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
📚 EXPLANATION - Function Basics:

🎯 Three Types of Functions Demonstrated:

1️⃣ Simple Function (No Parameters, No Return):
function sayHello() { console.log('Hello'); }
- Performs action (prints "Hello")
- No input parameters needed
- No return value

2️⃣ Function with Parameters (No Return):
function add(num1, num2) { console.log(num1 + num2); }
- Takes two parameters: num1, num2
- Performs action (prints sum: 15)
- No return value (just prints result)

3️⃣ Function with Parameters and Return:
function subtract(num1, num2) { return num1 - num2; }
- Takes two parameters: num1, num2
- Returns calculated value (5)
- Result can be stored in variable or used elsewhere

💡 Key Concepts:
- Functions are reusable blocks of code
- Parameters are inputs to functions
- Return statements send values back to caller
- Functions without return statement return undefined
- Function calls execute the function code
*/

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
📚 EXPLANATION - Advanced Parameters:

🎯 Default Parameters:
- registerUser(user = 'Bot') → If no argument passed, uses 'Bot'
- registerUser('John') → Returns "John is registered"
- registerUser() → Returns "Bot is registered"

🔄 Rest Parameters (...numbers):
- Collects all arguments into an array
- sum(1, 2, 3, 4, 5) → numbers = [1, 2, 3, 4, 5]
- Loops through array and sums all values → Returns 15
- Allows unlimited number of arguments

📦 Objects as Parameters:
- Pass entire object to function
- Access properties using dot notation: user.name, user.id
- Returns: "The user John with the id of 1 is logged in"

🎲 Arrays as Parameters:
- getRandom([1, 2, 3, 4, 5]) → Picks random element
- Math.random() → Random number 0-1
- Math.floor() → Rounds down to integer
- Math.floor(Math.random() * arr.length) → Random valid index

💡 Key Features:
- Default parameters prevent undefined errors
- Rest parameters handle variable arguments
- Objects/arrays allow complex data passing
- Functions can work with any data type
*/

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
📚 EXPLANATION - Variable Scope:

🌍 Global Scope:
- let x = 100 → Declared outside any function (global variable)
- Accessible from anywhere in the program
- Both functions can access x

🏠 Function Scope:
- let y = 10 → Declared inside add() function (local variable)
- Only accessible within that function
- Cannot be accessed from outside the function

🔍 Scope Chain:
- run() function: Can access global x (100) → Prints "100 In The Function"
- add() function: Can access both global x (100) and local y (10)
  - Prints "10 In The Global Scope" (comment is misleading - y is function-scoped)
  - Prints 110 (x + y = 100 + 10)

💡 Key Concepts:
- Inner scopes can access outer scope variables
- Outer scopes cannot access inner scope variables
- Global variables are accessible everywhere
- Local variables are only accessible within their function
- JavaScript looks for variables from inner scope outward
*/

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

/*
📚 EXPLANATION - Block Scope (ES6):

🧱 Block Scope with const/let:
- const x = 100 → Global scope
- const y = 200 → Block scope (only inside if statement)
- x + y = 300 (can access global x and local y within block)

🔄 Loop Block Scope:
- let i → Scoped to the for loop block
- i is only accessible within the loop
- Each iteration gets its own copy of i

🆚 Variable Declaration Comparison:
Inside if block:
- const a = 500 → Block-scoped (not accessible outside)
- let b = 600 → Block-scoped (not accessible outside)
- var c = 700 → Function-scoped (accessible outside!)

🎯 Key Differences:
- const/let: Block-scoped (respect {} boundaries)
- var: Function-scoped (ignores {} boundaries)
- console.log(c) works because var ignores block scope
- Trying to access a or b outside would cause ReferenceError

💡 Best Practice:
- Use const by default
- Use let when reassignment needed
- Avoid var (legacy, confusing scope rules)
*/

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
📚 EXPLANATION - Function Declaration vs Expression:

🏗️ Function Declaration:
function addDollarSign(value) { return '$' + value; }
- Uses 'function' keyword followed by name
- Hoisted (can be called before declaration)
- Creates named function in current scope
- Result: "$100"

📦 Function Expression:
const addPlusSign = function(value) { return '+' + value; }
- Function assigned to a variable
- NOT hoisted (cannot be called before assignment)
- Anonymous function stored in variable
- Result: "+100"

🔄 Hoisting Behavior:
Declaration: Can call addDollarSign() anywhere in scope
Expression: Can only call addPlusSign() after assignment

💡 When to Use:
Function Declaration:
- When you need hoisting
- For main/primary functions
- Traditional approach

Function Expression:
- When you want explicit control over availability
- For conditional function creation
- More modern approach
- Prevents hoisting confusion
*/

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

/*
📚 EXPLANATION - Arrow Functions (ES6):

➡️ Arrow Function Syntax:
const functionName = (parameters) => { return value; }

🎯 Examples Demonstrated:
1. addSign(100) → "$100"
2. add(100, 200) → 300
3. subtract(100, 200) → -100 (100 - 200)

✨ Arrow Function Benefits:
- More concise syntax than regular functions
- Shorter code for simple operations
- Modern ES6 feature

🔄 Syntax Variations:
- Single parameter: value => { return value * 2; }
- Multiple parameters: (a, b) => { return a + b; }
- No parameters: () => { return "Hello"; }
- Implicit return: (a, b) => a + b (no braces needed)

⚠️ Key Differences from Regular Functions:
- No 'this' binding (inherits from parent scope)
- Cannot be used as constructors
- No 'arguments' object
- More concise for simple functions

💡 Best Use Cases:
- Short, simple functions
- Callback functions (map, filter, reduce)
- When you don't need 'this' binding
*/

/*// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log('IIFE');
})();*/

/*
📚 EXPLANATION - IIFE (Immediately Invoked Function Expression):

🚀 IIFE Syntax:
(function() { code })();

🔍 Breakdown:
1. (function() { console.log('IIFE'); }) → Function expression in parentheses
2. () → Immediately invoke the function
3. Result: "IIFE" is printed immediately

💡 Why Use IIFE:
- Creates private scope (variables don't pollute global scope)
- Executes immediately without needing a function name
- Useful for initialization code that runs once
- Prevents variable name conflicts

🎯 Common Patterns:
- Module pattern (before ES6 modules)
- One-time setup code
- Creating closures
- Avoiding global variable pollution

✨ Alternative Syntax:
(function() { code }()); // Also valid

🆕 Modern Alternative:
{ // Block scope with let/const
  const privateVar = 'hidden';
  // initialization code
}
*/


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
📚 EXPLANATION - For Loops:

🔄 Basic For Loop Structure:
for (initialization; condition; increment) { code }

🎯 Loop Examples:

1️⃣ Loop 0 to 10 (inclusive):
for (let i = 0; i <= 10; i++)
- Prints: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

2️⃣ Loop 0 to 9 (exclusive):
for (let i = 0; i < 10; i++)
- Prints: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

3️⃣ Loop with Conditional Logic:
- When i === 5: prints "5 is my favorite number"
- continue: skips rest of current iteration
- Prints: 0, 1, 2, 3, 4, "5 is my favorite number", 6, 7, 8, 9, 10

4️⃣ Nested Loops (Multiplication Table):
- Outer loop: i from 1 to 10
- Inner loop: j from 1 to 10
- Creates complete multiplication table (1×1 to 10×10)

💡 Key Concepts:
- continue: skip current iteration, go to next
- break: exit loop completely
- Nested loops: inner loop completes fully for each outer iteration
- Loop variables (i, j) are block-scoped with let
*/

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

/*
📚 EXPLANATION - While & Do-While Loops:

🔄 While Loop:
while (condition) { code }
- Checks condition BEFORE each iteration
- May not execute at all if condition is false initially

🎯 Examples Demonstrated:

1️⃣ Basic While Loop:
let i = 0; while (i <= 10) { console.log('Number ' + i); i++; }
- Prints "Number 0" through "Number 10"
- Must manually increment i to avoid infinite loop

2️⃣ Array Iteration:
while (j < arr.length) { console.log(arr[j]); j++; }
- Loops through array elements
- Uses array length as condition

3️⃣ Nested While Loops:
- Creates multiplication table like nested for loops
- Outer loop controls rows, inner loop controls columns

4️⃣ Do-While Loop:
do { code } while (condition);
- Executes code FIRST, then checks condition
- Guarantees at least one execution
- Prints "Number 1" through "Number 10"

💡 Key Differences:
- while: condition checked before execution
- do-while: condition checked after execution
- for: more compact syntax for counting loops
- while: better for unknown iteration count
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

/*
📚 EXPLANATION - FizzBuzz Challenge:

🎯 Classic Programming Challenge:
Print numbers 1-100 with special rules for multiples

🔢 Rules:
- Multiple of 3: Print "Fizz"
- Multiple of 5: Print "Buzz"
- Multiple of both 3 and 5 (15): Print "FizzBuzz"
- Otherwise: Print the number

🧮 Logic Breakdown:
- i % 15 === 0: Divisible by both 3 and 5 → "FizzBuzz"
- i % 3 === 0: Divisible by 3 → "Fizz"
- i % 5 === 0: Divisible by 5 → "Buzz"
- else: Print the number

📊 Sample Output:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16...

💡 Key Concepts:
- Modulo operator (%) returns remainder of division
- Order matters: check 15 first (most specific condition)
- else if prevents multiple conditions from executing
- Common interview question testing basic programming logic

🎓 Why Important:
- Tests understanding of conditionals, loops, and modulo
- Demonstrates logical thinking and edge case handling
- Classic example of control flow and decision making
*/

/*//Array.forEach()
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
/!*socials.forEach(function (item) {
    console.log(item);})*!/
socials.forEach((item) => console.log(item));
socials.forEach((item, index, array) => console.log(`${index} - ${item}`));*/

/*
📚 EXPLANATION - Array.forEach():

🔄 forEach Method:
array.forEach(callback) - Executes function for each array element

🎯 Examples Demonstrated:

1️⃣ Traditional Function (commented):
socials.forEach(function(item) { console.log(item); })

2️⃣ Arrow Function:
socials.forEach((item) => console.log(item))
- Prints: Twitter, LinkedIn, Facebook, Instagram

3️⃣ With Index and Array Parameters:
socials.forEach((item, index, array) => console.log(`${index} - ${item}`))
- Prints: "0 - Twitter", "1 - LinkedIn", "2 - Facebook", "3 - Instagram"

📋 Callback Parameters:
- item: Current element being processed
- index: Index of current element (optional)
- array: The array being processed (optional)

💡 Key Features:
- Executes function for each element
- Cannot break out early (unlike for loop)
- Does not return a new array
- More readable than traditional for loops
- Cannot use return to exit (use some/every for that)

🆚 vs For Loop:
- forEach: More functional, cleaner syntax
- for: More control, can break/continue
*/

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

/*
📚 EXPLANATION - Array.filter():

🔍 Filter Method:
array.filter(callback) - Creates new array with elements that pass test

🎯 Examples Demonstrated:

1️⃣ Number Filtering (commented):
- evenNumbers: [2, 4, 6, 8, 10] (number % 2 === 0)
- oddNumbers: [1, 3, 5, 7, 9] (number % 2 !== 0)

2️⃣ Object Array Filtering:
- retailCompanies: Filters companies where category === 'Retail'
  Result: Company Two, Company Four, Company Nine

3️⃣ Complex Condition:
- eightiesCompanies: start >= 1980 AND end <= 2005
  Result: Companies that operated during 1980-2005 period

📊 Filter Logic:
- Returns true: Element included in new array
- Returns false: Element excluded from new array
- Original array remains unchanged

💡 Key Features:
- Creates NEW array (doesn't modify original)
- Only includes elements that pass the test
- Callback function must return boolean
- Perfect for data filtering and searching

🔄 Common Use Cases:
- Filter by category, status, date range
- Remove unwanted elements
- Search functionality
- Data validation and cleanup
*/

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
📚 EXPLANATION - Array.map():

🔄 Map Method:
array.map(callback) - Creates new array by transforming each element

🎯 Examples Demonstrated:

1️⃣ Number Transformation:
numbers.map((number) => number * number)
- Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] (squares)

2️⃣ Extract Property Values:
companies.map((company) => company.name)
- Extracts just the name property from each company object
- Result: ['Company One', 'Company Two', 'Company Three', ...]

3️⃣ Transform Objects:
companies.map((company) => ({ name: company.name, category: company.category }))
- Creates new objects with only name and category properties
- Removes start and end properties from each object

💡 Key Features:
- Always returns NEW array of same length
- Transforms each element using callback function
- Original array remains unchanged
- One-to-one mapping (same number of elements)

🆚 vs forEach:
- map: Returns new array, used for transformation
- forEach: No return value, used for side effects

🔄 Common Use Cases:
- Transform data structures
- Extract specific properties
- Format data for display
- Convert between data types
*/

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

/*
📚 EXPLANATION - Array.reduce():

🔄 Reduce Method:
array.reduce(callback, initialValue) - Reduces array to single value

🎯 Examples Demonstrated:

1️⃣ Sum Numbers:
numbers.reduce((acc, cur) => acc + cur, 0)
- acc (accumulator): Running total, starts at 0
- cur (current): Current array element
- Process: 0+1=1, 1+2=3, 3+3=6, 6+4=10... → Final: 55

2️⃣ Calculate Shopping Cart Total:
cart.reduce((acc, cur) => acc + cur.price, 0)
- Adds up all product prices: 100 + 200 + 300 = 600

📊 How Reduce Works:
Iteration 1: acc=0, cur={id:1, price:100} → acc=0+100=100
Iteration 2: acc=100, cur={id:2, price:200} → acc=100+200=300
Iteration 3: acc=300, cur={id:3, price:300} → acc=300+300=600

💡 Key Features:
- Reduces array to single value
- Accumulator carries value between iterations
- Initial value is optional (uses first element if omitted)
- Most powerful array method for calculations

🔄 Common Use Cases:
- Sum/average calculations
- Finding min/max values
- Counting occurrences
- Flattening nested arrays
- Building objects from arrays
- Complex data aggregations
*/

/*
//Array Challenge
const people = [
    {
        name: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        age: 30,
        phone: '123-456-7890',
    },
    {
        name: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        age: 25,
        phone: '123-456-7890',
    },
    {
        name: 'Bob',
        lastName: 'Roe',
        email: 'bob@gmail.com',
        age: 28,
        phone: '123-456-7890',
    },
    {
        name: 'Sam',
        lastName: 'Sulek',
        email: 'sam@gmail.com',
        age: 32,
        phone: '123-456-7890',
    },
]

const youngPeople = people.filter((person) => person.age < 30);
const youngPeopleNames = youngPeople.map((person) => person.name);
const youngPeopleNamesAndAges = youngPeople.map((person) => {
    return {
        name: person.name,
        age: person.age,
    };
});
const youngPeopleNamesAndAgesAndEmail = youngPeople.map((person) => {
    return {
        name: person.name,
        age: person.age,
        email: person.email,
    };
});

console.log(youngPeopleNamesAndAgesAndEmail);*/

/*
📚 EXPLANATION - Array Challenge (Chaining Methods):

🎯 Challenge: Filter and transform people data

📊 Data Processing Steps:

1️⃣ Filter Young People:
people.filter((person) => person.age < 30)
- Filters people under 30 years old
- Result: Jane (25), Bob (28) - excludes John (30) and Sam (32)

2️⃣ Extract Names Only:
youngPeople.map((person) => person.name)
- Result: ['Jane', 'Bob']

3️⃣ Create Name-Age Objects:
youngPeople.map((person) => ({ name: person.name, age: person.age }))
- Result: [{name: 'Jane', age: 25}, {name: 'Bob', age: 28}]

4️⃣ Create Name-Age-Email Objects:
youngPeople.map((person) => ({ name: person.name, age: person.age, email: person.email }))
- Final Result: [
    {name: 'Jane', age: 25, email: 'jane@gmail.com'},
    {name: 'Bob', age: 28, email: 'bob@gmail.com'}
  ]

💡 Key Concepts Demonstrated:
- Method chaining: filter() → map()
- Data transformation pipeline
- Object destructuring and reconstruction
- Filtering by numeric criteria
- Progressive data refinement

🔄 Alternative Chaining Approach:
const result = people
  .filter(person => person.age < 30)
  .map(person => ({ name: person.name, age: person.age, email: person.email }));

🎓 Real-World Applications:
- User data processing
- API response filtering
- Data preparation for UI components
- Report generation
*/
