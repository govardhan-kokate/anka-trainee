

let arr = [1, 2, 3, 4, 5, 6];
let rotarr = [];

function rotateArr() {
   for (let i = 2; i < arr.length; i++) {
      rotarr.push(arr[i]);
   }
   console.log(rotarr);

   for (let j = 0; j < arr.length - 4; j++) {
      rotarr.push(arr[j]);
   }
   console.log(rotarr);
}
rotateArr();












//------------------

// let arr = [1, 2, 3, 4, 5, 6];
//  let rotarr = [];

// function rotateArr() {
   
//    for (let i=2; i < arr.length; i++) {
//     arr.shift();
//     console.log(arr);
//    }
//    arr.push(1); 
// }
// console.log(rotarr);
// rotateArr();













