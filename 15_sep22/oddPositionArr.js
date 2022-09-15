let arr = [4,2,7,4,8,2,5,8,1,9]
function oddPositionArr(){
for(let i=1;i<arr.length;i+=2){
    console.log("Element on " +i+ " odd position :",+arr[i]);
}
}
oddPositionArr();