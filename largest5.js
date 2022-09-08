/*Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
Sample numbers : -5, -2, -6, 0, -1
Output : 0*/

let no = [-5,-2,-6,0,-1];
function largest(){
for(i=1;i<no.length;i++)
    for(j=0;j<i;j++)
        if(no[i]>no[j]){
            let x = no[i];
            no[i] = no[j];
            no[j] = x;
        }
        console.log(no[0] +' is largest of '+no)
    } 
largest();