let a= [1,4,6];
let b= [2,3,5];
let arr= [];

function arrConcat(){
    for(let i=0;i<a.length;i++){
        arr.push(a[i]);
    }
        for(let j=0;j<b.length;j++){
         arr.push(b[j]);
        }
    
    console.log(arr);
    }
    arrConcat();

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
              let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);