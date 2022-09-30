//program to find HCF (GCD) of two numbers.
function gcd(a,b){
    let result = (a,b);
    while (result > 0){
        if (a % result == 0 && b % result == 0){
            break;
        }
        result--;
    }
    return result;
}
let a = 98;
let b = 56;
console.log(gcd(a, b));


