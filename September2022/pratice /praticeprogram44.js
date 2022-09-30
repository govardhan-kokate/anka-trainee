//program to find all factors of a number
let num = 12;

for(let i = 0 ; i <= num ; i ++){
    if (num%i == 0){
        console.log(i);
    }
}
console.log(num);