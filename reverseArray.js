let revArray = [12,2,22,32,5];
let newArray = [];
console.log(revArray+" original array");
function reversArray(){
    for(i=revArray.length-1;i>=0;i--){
    newArray.push(revArray[i]);
    }
    console.log(newArray)
}
reversArray();