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