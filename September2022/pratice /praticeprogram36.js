//Write a program in C to find a pair with given sum in the array

let arr = [1,2,3,4,5];

for(let i = 0 ; i < arr.length ; i ++){
    for (let j = 0 ; j < arr.length ; j++){
        if( arr[i]+arr[j] == 9){
            console.log(`  ${i} and ${j} it is pair of  given sum 9 `)
        }
    }
}

