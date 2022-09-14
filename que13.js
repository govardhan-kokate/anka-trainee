const array3 = ['a','b','c'];
const array4 = [1, 2, 3];
let mixedArray = [];
function mixArray(){
    for(i=0;i<=array2.length-1;i++){
    mixedArray.push(array3[i]);
    mixedArray.push(array4[i]);
    }
    console.log(mixedArray);
}
mixArray();