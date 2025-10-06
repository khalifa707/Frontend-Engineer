/*
//More On Object literal and the this Keyword
const rectangle = {
    name: 'Rectangle',
    width: 10,
    height: 10,
    area: () => {
        return this.width * this.height;
    }
}
console.log(rectangle.area())
console.log(this)*/

/*
//Constructor Functions
/!*
const now = new Date();
*!/
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = () => {
        return this.width * this.height
    }
}

const rec1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rec1.area());*/

/*//literals VS Build-in Constructors
const strLit = 'Hello';
const strObj = String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//Boxing
console.log(strLit.toUpperCase())
console.log(strLit[0]);

//Unboxing
console.log(strObj.valueOf(),typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);*/

/*//Working With Object Properties
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = () => {
        return this.width * this.height
    }
}

const rec1 = new Rectangle('Rectangle 1', 10, 10);
const rec2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rec1.hasOwnProperty('name'));
console.log(rec1.hasOwnProperty('area'));
console.log(rec1.hasOwnProperty('toString'));
console.log(rec2.hasOwnProperty('color'));

rec2.perimeter = () => 2*(rec2.width + rec2.height);
console.log(rec2.perimeter());

delete rec2.perimeter;
console.log(rec2);

console.log(Object.keys(rec1));
console.log(Object.values(rec1));
console.log(Object.entries(rec1));

for (let [key, value] of Object.entries(rec1)) {
    console.log(`${key}: ${value}`);
}

for (let [key, value] of Object.entries(rec1)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}*/

/*// Prototype & Prototype Chain
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
    return this.width === this.height;
};

const rec1 = new Rectangle('Rectangle 1', 10, 10);
const rec2 = new Rectangle('Rectangle 1', 20, 30);

console.log(rec1.area());
console.log(rec1.perimeter());
console.log(rec1.isSquare());
console.log(rec2.area());
console.log(rec2.perimeter());
console.log(rec2.isSquare());*/

/*
// Object.create()
const rectanglePrototype = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * (this.width + this.height);
    },
    isSquare: function () {
        return this.width === this.height;
    }
}
function createRectangle(name, width, height) {
    const rectangle = Object.create(rectanglePrototype);
    rectangle.name = name;
    rectangle.width = width;
    rectangle.height = height;
    return rectangle;
}

const rec1 = createRectangle('Rectangle 1', 10, 10);
const rec2 = createRectangle('Rectangle 2', 20, 30);

console.log(rec1.area());
console.log(rec1.perimeter());
console.log(rec1.isSquare());
console.log(rec2.area());
console.log(rec2.perimeter());
console.log(rec2.isSquare());*/

/*
//Prototypical Inheritance & Call
function Shape (name) {
    this.name = name;
}

function Rectangle(name, width, height) {
    Shape.call(this, name);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const rec1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rec1);*/

/*
//Classes
class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }
}

const square = new Rectangle('Square', 20, 20);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());*/

/*
//Class Inheritance
class Shape {
    constructor(name) {
        this.name = name;
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }
}

const square = new Rectangle('Square', 20, 20);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare()); */

/*
//Static Methods
class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }

    static isValidDimensions(width, height) {
        return width > 0 && height > 0;
    }
}
console.log(Rectangle.isValidDimensions(10, 10));*/

/*
// Bind() & Defining This
class App {
    constructor() {
        this.serverName = 'localhost';
        this.serverPort = 3000;
    }

    getServerName() {
        console.log(this.serverName);
    }
}

const app = new App();
app.getServerName();*/

/*//Getters & Setters
class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}

const square = new Rectangle('Square', 20, 20);
console.log(square.area);
square.area = 100;
console.log(square.area);*/

/*// Setters & Getters with defineProperty()
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        set: function (value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    });
}*/

