//program in C to delete an element at desired position from an array

let arr1 = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0 ; i < arr1.length ; i++){
    if(i == 3 ){
        arr1.splice(i,2);
    }
}
console.log(arr1);