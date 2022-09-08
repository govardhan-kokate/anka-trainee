
// 2. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// let arr=[0,-1,4];


for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
alert(arr);



// array=[0,-1,4]
// array.sort();
// array.reverse();
// alert(array);