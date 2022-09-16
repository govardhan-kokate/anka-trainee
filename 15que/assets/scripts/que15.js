///15. Write a function that rotates an array by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
//Try solving this without creating a copy of the array. How many swap or move operations do you need?
let stableArray = [1, 2, 3, 4, 5, 6];
let popElement;
arrayLength = stableArray.length;

function rotate(){
    for(i=0; i<2; i++){
        popElement = stableArray[0];
       for(j=0; j<arrayLength; j++){
    stableArray[j] = stableArray[j+1];
}
stableArray[arrayLength-1] = popElement;
}
    console.log(stableArray);
}
rotate();