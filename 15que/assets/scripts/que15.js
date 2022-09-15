///15. Write a function that rotates an array by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
//Try solving this without creating a copy of the array. How many swap or move operations do you need?
const stableArray = [1, 2, 3, 4, 5, 6];
let rotateArray = [];
function rotate(){
    for(let j=2;j<=stableArray.length-1;j++){
        rotateArray.push(stableArray[j]);
    }
    for(let i=0;i<2;i++){
        
        rotateArray.push(stableArray[i]);
    }
    console.log(rotateArray);
}
rotate();