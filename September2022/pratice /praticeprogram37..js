//Write a program in C to find the majority element of an array ?

let max = 0;
let count
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] == arr[i+1]){
        count++
    }else{
        count=1;
    }
    if(count>max){
        max = count;
        p = arr[i]
    }
}
