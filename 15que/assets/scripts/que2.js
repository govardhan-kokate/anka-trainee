//2. Write a program that prints the next 20 leap years.
let year = 2000;
function leapYear(){
    for(let i=1;i<=20;i++){
        if((year%4==0) && (year%100!=0) || (year%400==0)){
            console.log(year);
            year = year + 4;
        }
        else{
            console.log("not a leap year");
        }
    }
}
leapYear();