//a program in javasrcipt to merge two arrays of same size sorted in decending order

let arr1 = [4,2,3,1,5];
let arr2 = [6,7,8,9,10];
let arr3 = [];

for(let i = 0 ; i < arr1.length ; i++){
    arr3.push(arr1[i]);
}for(let i = 0 ; i < arr2.length ; i++){
    arr3.push(arr2[i]);
}
console.log(arr3);