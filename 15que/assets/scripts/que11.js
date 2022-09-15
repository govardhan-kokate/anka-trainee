//11. Write three functions that compute the sum of the numbers in an array: using a for-loop, a while-loop, and recursion.
//(Subject to availability of these constructs in your language of choice.)
const arry = [12, 2, 22, 32, 5];
let add=0;
function addArray3(){
    let i=0;
    let add=0;
    while(i<=(arry.length-1)){
        add = add + arry[i];
        i++;
    }
    console.log("(while) add of "+arry+" = "+add);
}
function addArray2(arry,i){
    if (i==arry.length){
        return arry;
    }
    if(i<=arry.length-2){
        add = add + arry[i];
        addArray2(arry,i+1);
    }else if(i<=arry.length-1){
        add = add + arry[i];
        console.log("(recursion) add of "+arry+" = "+add); 
    }
}
function addArray1(){
    let add=0;
    for(let i=0;i<=arry.length-1;i++){
    add = add + arry[i];
    }
    console.log("(for) add of "+arry+" = "+add);
}
addArray1();
addArray2([12, 2, 22, 32, 5],0);
addArray3();