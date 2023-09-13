let x = 3.14;

x = Math.round(x);
console.log(`Rounded value of x is ${x}`);

x = 3.99
x = Math.floor(x);
console.log(`Floor of x is ${x}`);

x = 3.14
x = Math.ceil(x);
console.log(`Ceiling of x is ${x}`);

x = 9
x = Math.pow(x, 3);
console.log(`Power of x is ${x}`);

x = 25
x = Math.sqrt(x);
console.log(`Square Root of x is ${x}`);

x = -5.99
x = Math.abs(x);
console.log(`Absolute of of x is ${x}`);

let y = 5
let z = 9
let maximum;
let minimum;

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
console.log(`Maximum of x,y,z is ${maximum}`);
console.log(`Minimum of x,y,z is ${minimum}`);

x = Math.PI;
console.log(`More digits of PI constant is ${x}`)