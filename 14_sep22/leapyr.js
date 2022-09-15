
//2. Write a program that prints the next 20 leap years.

function checkLeapYear(year) {
    for(let i=0;i<20;i++){
    if((year % 4 == 0) && ( year % 100 != 0) || (year % 400 ==0 )) {
        console.log(year + ' is a leap year');  
        year = year + 4;
        }      
        else{
           console.log(year + ' is not a leap year');   
        }     
    }

}

checkLeapYear(2000);



//     const year = prompt("Enter a year: ");
//     checkLeapYear(year);