//14. Find check if a year is leap year or not
//checkLeapYear(1900) //"Year 1900 is not a leap year"

let year;
//let checkYearOrNot = Number(prompt("enter year: "));

 

function checkLeapYear()
{
    if((0 == year%4 ) && (0 != year % 100) || (0 ==year %400 )){
        console.log("this is leap Year");
    }
    else{
        console.log("this is not leap Year");
    }
}
console.log(checkLeapYear(1900));