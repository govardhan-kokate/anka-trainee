//program to find power of a number using for loop.
let i, pow =1;

function powerOfNumber(b,e){
    for (let i=0 ; i < e ; i ++){
        pow = pow*b;
    }
    return pow;
}
console.log(powerOfNumber(2,3))