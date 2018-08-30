//let & const
let variable = "test";
console.log(variable);

//block scope
function reset(){
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//arrow functions
console.log("arrow functions");
const addNumbers = function(number1:number, number2:number):number{
    return number1+number2;
}
console.log(addNumbers(10,2));

const multiplyNumbers = function(number1:number, number2:number):number{
    return number1*number2;
}
console.log(multiplyNumbers(10,6));
const divideNumbers = (number1:number,number2:number)=>number1/number2;
console.log(divideNumbers(10,5));
//DEfault Parameters
console.log("default parameters");
const countDown = (start:number):void=>{
    while(start>0){
        start--;
    }
    console.log('done!');
}
countDown(10);
//Rest & Spread
console.log('Rest & Spread');
const numbers =[1,10,99,-5];
console.log(Math.max(...numbers));

//Destructuring ARRAYS
const myHobbies = ['cooking', 'sports'];
const [hobby1,hobby2] = myHobbies;
console.log(hobby1,hobby2);
//Destructuring OBJECTS
const userData = {userName:"max", age:27};
const {userName:myName,age:myAge}= userData;
console.log(myName,myAge);

//Template literals
const userName =" liza";
const greeting = `This is a heading!
I'm ${userName},
I'm so coooooool`;
console.log(greeting);

//other es6 features
