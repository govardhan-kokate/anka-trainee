// javascript Assignment - 08-09-2022
// Find Second largest no from array.
// input =  array = [5, 8, 9, 12, 21, 32];
// output = 21


function findSecondLargestElement(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr= [5, 8, 9, 12, 21, 32];
findSecondLargestElement(arr);