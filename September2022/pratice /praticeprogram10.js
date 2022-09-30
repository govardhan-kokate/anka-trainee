//10 Find the largest of three number
//findLargest(21,45,13) //"45 is the largest number"




function largNumber(x,y,z)
{
    largNumber = 0;
    if(x > y){
        largNumber=x;

    }

    else
    {
        largNumber=y}
        if (z > largNumber){
            largNumber=z;

        }return largNumber;

    
}
console.log(largNumber(21,45,13));


