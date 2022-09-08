/*Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
Sample numbers : -5, -2, -6, 0, -1
Output : 0*/

let array = [5, 8, 9, 12, 21, 32];
function largest(){
for(i=1;i<array.length;i++)
    for(j=0;j<i;j++)
        if(array[i]>array[j]){
            let x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        console.log(array[1] +' is largest of '+array)
    } 
largest();