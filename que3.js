let array = [5, 8, 9, 12, 21, 32];
function largest(){
for(i=1;i<array.length;i++)
    for(j=0;j<i;j++)
        if(array[i]>array[j]){
            let x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        console.log(array[0] +' is largest of '+array)
    } 
largest();