'use strict';

let calculation = "";

while (true) {
  const answer = prompt("Do you want to do a calculation? Y/N");
  if (answer === "N") {
    break; 
  }
  
  if (answer === "Y") {
    const firstNumber = Number(prompt("What is the first number?"));
    const secondNumber = (prompt("Which operation do you want to do?");
    const thirdNumber = Number(prompt("What is the second number?"));
    calculation = `${firstNumber} ${secondNumber} ${thirdNumber}`
    console.log(`${calculation}`);
  } else {
    console.log("Your answer was unclear");
  }
}

console.log("Oke, bye.");

// Checklist:
// When started, it will ask you if you want to do a calculation. If you answer “Y” it will ask three questions:

// 1. What is the first number?
// 2. Which operation do you want to do?
// 3. What is the second number?

// The calculator will then respond in this way: “5 + 7 = 12”.

// It will then loop back to ask you if you want to do a calculation.

// Remember that when the user types in, the operation it’s a string. You can compare that string to other strings like “+” or “-” to see what operation needs to be done. Don’t forget to cast numerical input to actual numbers!

// You can assume the user types in the correct character for the operation. If you want to, you can check this but you don’t need to.