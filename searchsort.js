let sarray = [2 , -1 ,6,-3,4];
let num  = -1 ;
function sorted(){
    for (let i=0; i<sarray.length;i++){
        for(let a=0;a<i;a++){
            if(sarray[i]>sarray[a]){
                let x = sarray [i];
                sarray[i] = sarray[a];
                sarray[a] = x;

            }
        }

    }
        console.log(sarray + 'sorted sarray');
        for(let i=0;i<sarray.length;i++){
            if(sarray[i] == num){
                console.log(num+ 'is on ' + [i+1]+ 'position');
            }
        }
}
sorted();