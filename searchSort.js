let searchNo = [5,-2,6,0,-1];
let val = 6;
function sorted(){
for(i=0;i<searchNo.length;i++){
    for(j=0;j<i;j++){
        if(searchNo[i]>searchNo[j]){
            let x = searchNo[i];
            searchNo[i] = searchNo[j];
            searchNo[j] = x;
        }
    }
}
    console.log(searchNo +' is sorted searchNo');
    for(i=0;i<searchNo.length;i++){
     if(searchNo[i] == val){
        console.log(val+ " is on " + [i+1] +' position');
       }
    }   
}
sorted();


//for(var i=0;i<searchNo.length;i++){}
/*for(k=0;k<searchNo.length;k++)
    for(j=0;j<i;j++)
        if(searchNo[k] == 5){
        console.log('5 is on ' + searchNo[k] +' position');
    }*/
