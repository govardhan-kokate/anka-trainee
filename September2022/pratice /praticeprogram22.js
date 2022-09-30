//8) Write a JavaScript program in if else calculater ;

const oprater = prompt("Select oprater(+,-,/,*)");

let number1 = Number(prompt("Enter First Number :"));
let number2 = Number(prompt("Enter Second Number :"));

let result;

if (oprater == "+") {
  result = number1 + number2;
} else if (oprater == "-") {
  result = number1 - number2;
} else if (oprater == "/") {
  result = number1 / number2;
} else {
  result = number1 * number2;
}
document.write();
document.write(result);

console.log(`${number1}${oprater}${number2}=${result}`);

