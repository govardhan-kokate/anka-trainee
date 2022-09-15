//1. Write a program that prints all prime numbers.
function prime(number){
    for(i=2;i<number;i++){
        if(number%i == 0){
            alert(number+" is not prime number");
            console.log(number+" is not a prime number");
            return 0;
        }
        else{
            alert(number+" is prime number");
            console.log(number+" is prime number");
            return 0;
        }
    }
}
prime(6);