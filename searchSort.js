let searchArray = [5,-2,6,0,-1];
let val = -2;
function sorted(){
for(let i=0;i<searchArray.length;i++){
    for(let j=0;j<i;j++){
        if(searchArray[i]>searchArray[j]){
            let x = searchArray[i];
            searchArray[i] = searchArray[j];
            searchArray[j] = x;
        }
    }
}
    console.log(searchArray +' is sorted searchArray');
    for(let i=0;i<searchArray.length;i++){
     if(searchArray[i] == val){
        console.log(val+ " is on " + [i+1] +' position');
        console.log("check")
       }
    }   
}
sorted();