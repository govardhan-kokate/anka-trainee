/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
minMax([1]) ➞ [1, 1]*/
let arr = [2, 3, 5, 10, 2, -9, 3];

console.log( arrayMaxMin(arr, "Max"));
console.log( arrayMaxMin(arr, "Min"));

function arrayMaxMin(array, selector) {//useing function;

  let value = array[0];   // variable to hold the current max/min value.

  for (let  i = 1; i < array.length; i++) {
    if (selector == "Min") {
      if (array[i] <  value) {
        value = array[i];
      }
    } else if (selector == "Max") {
      if (array[i] > value) {
        value = array[i];
      }
    }

  }
  return value;
}
