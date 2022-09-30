/*program to swap first and last digits of a number

//function swap(arr){
    [arr[0],arr[arr.length-1]]= [arr[arr.length-1],arr[0]]
    return arr;

}
console.log(swap([1,2,3,4]));*/

let arr= [1,2,3,4];
let temp ;


for(let i = 0 ; i < arr.length/2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length-1 +i];
    arr[arr.length-1 +i] = temp;
    

    
    co
    
}
console.log(arr);