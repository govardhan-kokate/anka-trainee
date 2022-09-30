//program to calculate factorial of a number.
function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 4;
answer = factorial(n);
console.log(` the fatorial of ${n} is ${answer}`);
