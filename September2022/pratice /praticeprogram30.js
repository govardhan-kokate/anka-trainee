//WAP to enter the five element and display in ascending order ?

let arr = [4,3,5,1,2];

for(let i = 0 ; i < arr.length; i ++){
    for(let j = 0 ; j < i ; j++){
        if(arr[i]<arr[j]){
            let x = arr[i]
            arr[i] =  arr[j]
            arr[j] = x;
        }
    }
}
console.log(arr);

