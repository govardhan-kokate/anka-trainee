/*Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

let ary = [0,-1,4];
function arraySort(){
    let x = ary[i];
    ary[i] = ary[j];
    ary[j] = x;
}
function asc(){
for(i=0 ;i<ary.length;i++)
    for(j=0;j<i;j++)
        if(ary[i]<ary[j]){
            arraySort();
        }
        alert('sorted numbers are in ascending' +ary)
    }
function dsc(){
for(i=0 ;i<ary.length;i++)
    for(j=0;j<i;j++)
        if(ary[i]>ary[j]){
            arraySort();  
       }
        alert('sorted numbers are in descending' +ary)
    }
asc();
dsc();