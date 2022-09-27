//16)Write a JavaScript function that reverse a number.Sample Data and output:Example x = 32243;Expected Output : 34223


let rev = 0;
let num= 32243; 
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
console.log("Reverse number : "+rev);

