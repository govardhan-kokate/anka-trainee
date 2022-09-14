const array1 = ['a','b','c'];
const array2 = [1, 2, 3];

/*const concatArray = array1.concat(array2);
console.log(concatArray);
*/

let arrayJoin = [];
function concatArray(){
    for(i=0;i<=array1.length-1;i++){
    arrayJoin.push(array1[i]);
    }
    for(i=0;i<=array1.length-1;i++){
    arrayJoin.push(array2[i]);
    }
    console.log(arrayJoin);
}
concatArray();