//Write a JavaScript program to find the most frequent item of an array. Go to the editor
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0 ;
let item;

for(let i = 0 ; i < arr.length ; i++){
    for (let j=i ; j < arr.length ; j++){
        if (arr[i]==arr[j])
        m++;
        
        if (mf<m){
            mf = m;

            }

        }
    }
}

