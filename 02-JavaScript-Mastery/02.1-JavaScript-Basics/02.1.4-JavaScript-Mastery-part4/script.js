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

