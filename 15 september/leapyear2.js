//2. Write a program that prints the next 20 leap years.

let years = prompt("Please input a years")
let Num = 20;
result = true;

function leapyear(year , Num, result) {
    while(Num >=0) {
        if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));{
            result = true;
            console.log(year);
            year++;
            Num--;
        }
        else {
            year++;
        }
    }
}
