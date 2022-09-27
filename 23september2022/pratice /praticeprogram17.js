/*2) Write a JavaScript function that returns a passed string with letters in alphabetical order.

*/
function alphabeticalOrder(str){
    return str.split('').sort().join('');

}
console.log(alphabeticalOrder('webmaster'));
