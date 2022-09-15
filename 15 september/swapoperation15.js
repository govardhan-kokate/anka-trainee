//15. Write a function that rotates an array by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the array. How many swap or move operations do you need.

//arr = [1,2,3,4,5]
//k = 2
function rotatedArray(arr,k){
    for(let i = 0; i < k; i++){
        let temp = arr[0];
        for(j = 0; j < arr.length; j++){
            arr[j] = arr[j+1];
        }
        arr[arr.length - 1]=temp
    }
    return arr;
}

let arr = [1,2,3,4,5];
k = 2; 
console.log(rotatedArray(arr,k))