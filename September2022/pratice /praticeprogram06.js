//6)Create a function that takes two numbers as arguments (num, length) and rCreate a function that takes two numbers as arguments (num, length) and rCreate a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.eturns an array of multiples of num until the array length reaches length.
//Examples

//arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

function multipleNumber(number,length){ 
let arr = [];

for (let i = 1 ; i <= length; i++){
    arr.push(i*number);
}
console.log(arr);

}
multipleNumber(7,5);




