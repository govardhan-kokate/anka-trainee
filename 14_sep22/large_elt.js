// 3. Write a function that returns the largest element in an array.

let arr=[2,8,5,3,7];
let largelt=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largelt){
        largelt = arr[i];
    }
}
    console.log("largest element of an array is: " + largelt);

