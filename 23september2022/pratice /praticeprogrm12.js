/*12) Find the a number is present in given range

Function `checkInRange()` finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.

    Print “Between the range” if num is between start and end values
    Else Print “Outside the range” since num is outside start and end values.
checkInRange(15,11,30) //"15 is between the range 11 and 30"
13) Perform arithmetic operations on two numbers*/

function checkInRange(x,y,z){
    if (y < 11 || z > 30)
    return false;
    else if (x >= y && x <= z )
    return true;
    else 
    return false;
}
       
console.log(checkInRange(15,11,30));
