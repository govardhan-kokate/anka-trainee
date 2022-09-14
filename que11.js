const arry = [12, 2, 22, 32, 5];
function addArray3(){
    let i=0;
    let add=0;
    while(i<=(arry.length-1)){
        add = add + arry[i];
        i++;
    }
    console.log("(while) add of "+arry+" = "+add);
}
function addArray2(arry){
    let i=0;
    let add=0;
    if(i<=arry.length-1){
        add = add + arry[i];
        i++;
    }
    console.log("(recursion) add of "+arry+" = "+add);
}
function addArray1(){
    let add=0;
    for(let i=0;i<=arry.length-1;i++){
    add = add + arry[i];
    }
    console.log("(for) add of "+arry+" = "+add);
}
addArray1();
addArray2([12, 2, 22, 32, 5]);
addArray3();