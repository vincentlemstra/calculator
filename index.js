'use strict';

let calculation = "";

while (true) {
  const answer = prompt("Do you want to do a calculation? Y/N");
  if (answer === "N") {
    break;
  }

  if (answer === "Y") {
    const firstNumber = Number(prompt("What is the first number?"));
    const operation = prompt("Which operation do you want to do? +, -, * or /");
    const secondNumber = Number(prompt("What is the second number?"));

    switch (operation) {
      case "+":
        calculation = firstNumber + secondNumber;
        break;
      case "-":
        calculation = firstNumber - secondNumber;
        break;
      case "*":
        calculation = firstNumber * secondNumber;
        break;
      case "/":
        calculation = firstNumber / secondNumber;
        break;
    }

    console.log(`${firstNumber} ${operation} ${secondNumber} = ${calculation}`);
  } else {
    console.log("Your answer was unclear");
  }
}

console.log("Oke, bye.");
