const arr = [12, 2, 22, 32, 5];
let sum=0;
function sumArray(){
    for(i=0;i<=arr.length-1;i++){
    sum = sum + arr[i];
    }
    console.log("sum of "+arr+" = "+sum);
}
sumArray();