//linear sort -Sort a array , find one number if available and print position of that number.

let arr=[0,-1,4,2,6];
let val=4;

function arrSort(){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr ,"is sorted array");
    


for(let i=0;i<arr.length;i++){

    if(arr[i] === val){
        console.log(val + " is on " +[i+1]+ " poition");
    }
    // else{
    // console.log("number is not available in array");
    // }
    
}
}

arrSort();