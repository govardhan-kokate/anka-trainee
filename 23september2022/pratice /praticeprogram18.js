//4) Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.Example string: 'the quick brown fox'Expected Output :'The Quick Brown Fox '

const str = 'the quick brown fox';
const arr = str.split(" ");

for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase().arr[i].slice(1);
}
let str2 = arr.join(" ");
console.log(str2);