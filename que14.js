const arrayOne = [1, 4, 6];
const arryTwo = [2, 3, 5];
let sortedArray = [];
function concatArray(){
    for(i=0;i<=arrayOne.length-1;i++){
    sortedArray.push(arrayOne[i]);
    }
    for(i=0;i<=arryTwo.length-1;i++){
    sortedArray.push(arryTwo[i]);
    }
        for(let i=0 ;i<sortedArray.length;i++){
            for(let j=0;j<i;j++){
                if(sortedArray[i]<sortedArray[j]){
                        let x = sortedArray[i];
                        sortedArray[i] = sortedArray[j];
                        sortedArray[j] = x;
                }  
            }    
        }          
    console.log(sortedArray);
}
concatArray();