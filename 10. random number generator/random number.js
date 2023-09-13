let firstRandomDice;
let secondRandomDice;
let thirdRandomDice;

console.log(firstRandomDice);
console.log(secondRandomDice);
console.log(thirdRandomDice);


document.getElementById("rollButton").onclick = function () {
  firstRandomDice = Math.floor(Math.random() * 6);
  secondRandomDice = Math.floor(Math.random() * 6);
  thirdRandomDice = Math.floor(Math.random() * 6);

  document.getElementById("firstDiceLabel").innerHTML = firstRandomDice;
  document.getElementById("secondDiceLabel").innerHTML = secondRandomDice;
  document.getElementById("thirdDiceLabel").innerHTML = thirdRandomDice;
}

