"use strict";
//let & const
var variable = "test";
console.log(variable);
//block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//arrow functions
console.log("arrow functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 2));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 6));
var divideNumbers = function (number1, number2) { return number1 / number2; };
console.log(divideNumbers(10, 5));
//DEfault Parameters
console.log("default parameters");
var countDown = function (start) {
    while (start > 0) {
        start--;
    }
    console.log('done!');
};
countDown(10);
//Rest & Spread
console.log('Rest & Spread');
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
//Destructuring ARRAYS
var myHobbies = ['cooking', 'sports'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//Destructuring OBJECTS
var userData = { userName: "max", age: 27 };
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
//Template literals
var userName = " liza";
var greeting = "This is a heading!\nI'm " + userName + ",\nI'm so coooooool";
console.log(greeting);
