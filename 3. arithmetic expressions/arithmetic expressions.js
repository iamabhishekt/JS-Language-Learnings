/* 
  arithmetic expression is a combination of...
  operands (values, variables, etc.)
  operators (+, - , *, /, %)
  that can be evaluated to a value
  ex. y = x + 5;
*/

let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;

// let extraStudents = students % 2;
// console.log(extraStudents);

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

/* 
Augmented assignments as above..
can only be done for reassigning values to variables
it cannot be used while initializing variable.
like follows
eg. let extraStudents %= 2;
*/
// console.log(students);

/* 
  operator precedence
  1. parenthesis ()
  2. exponents
  3. multiplication & division
  4. addition & subtraction
*/

let result = 1 + 2 * 3**2 - (4 + 1);

console.log(result);


