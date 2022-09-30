/*Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"*/


    
function even_Odd(){
    for(i=0; i<15; i++){
    if(i%2 == 0)
    console.log(i + " " + "Even")
    if(i%2 == 1)
    console.log(i + " " + "Odd")}
    
    }
    (even_Odd());