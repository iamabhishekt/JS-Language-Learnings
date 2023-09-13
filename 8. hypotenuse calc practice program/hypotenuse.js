let sideA;
let sideB;
let hypotenuse;

/* 
sideA = window.prompt("Enter Side A");
sideA = +sideA;

sideB = window.prompt("Enter Side B");
sideB = +sideB;

hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

console.log(hypotenuse);
 */

document.getElementById("submitButton").onclick = function () {
  sideA = document.getElementById("aTextBox").value;
  sideA = Number(sideA);
  
  sideB = document.getElementById("bTextBox").value;
  sideB = Number(sideB);

  hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

  document.getElementById("cLabel").innerHTML = `Hypotenuse: ${hypotenuse}`
};
