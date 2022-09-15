//5. Write a function that checks whether an element occurs in an array.

let arr = [1,2,3,4,5,6];
let  Num= 3;


for (let i = 0; i <= arr.length-1;i++){
    if(Num == arr[i]){
        console.log(`index of ${Num} is ${i}`)
    }
}
