//6. Write a function that returns the elements on odd positions in an array.
let theArray = [5, 6, 7, 8, 9];
let newOddArray = [];
console.log(theArray+" origonal array");
function oddArray(){
for(let i=0;i<=theArray.length-1;i++){
    if((theArray[i]%2)!=0){
        newOddArray.push(theArray[i]);
    }
}
console.log(newOddArray+" Arrays that are in odd placce");
}
oddArray();