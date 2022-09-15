//------------using for loop------------
let arr = [2,1,6,3,1,2];
let sum = 0;

function sumOfArrForLoop(){
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of elements in array is: " + sum);
}
sumOfArrForLoop();

//-----using while loop----------
let a=0;
function sumOfArrWhileLoop(){
    let i=0;
        while(i<arr.length){
          
          a+= arr[i]; 
          i++; 
        }
       console.log(a);
   }  
 
sumOfArrWhileLoop();

//---------------using recursion----------------

//  function sumByRec() {
//     // let arr=[1, 2, 3, 4, 5, 6];
//     if(arr.length === 0){
//         return 0;
//     }
//     function add(arr, i){
//         console.log(arr[i]);
//         if(i === arr.length-1){
//             return arr[i];
//         }
//         return arr[i] + add(arr, i+1);
//     }
//     return add(arr, 0);
// }
// sumByRec([1, 2, 3, 4, 5, 6]); //21













