//  Type Conversion = change the datatype of a value to another (strings, numbers, booleans)

let age = window.prompt(`How old are you?`);

age = +age; //one way to do string to number
age = Number(age);

age += 1;

console.log(`Happy Birthday! You are ${age} years old.`);


let stringPi;
let numberPi;
let booleanPizza;

stringPi = Number(`3.14`);
numberPi = String(3.14);
booleanPizza = Boolean(`pizza`);


console.log(`stringPi : ${typeof stringPi}`);
console.log(`numberPi : ${typeof numberPi}`);
console.log(`booleanPizza : ${typeof booleanPizza}`);