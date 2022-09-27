/*//13) Perform arithmetic operations on two numbers

Function `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
    Print result of num1+num2 if operation is “add”
    Print result of num1-num2 if operation is “subtract”
    Print result of num1*num2 if operation is “multiply”
    Print result of num1/num2 if operation is “divide”
    Print result of num1%num2 if operation is “modulus”
    Else print “Invalid operation”
example - evalNumbers(15,10,"add") //"Sum of 15 and 10 is 25"
evalNumbers(20,8,"subtract") //"Difference of 20 and 8 is 12"
evalNumbers(12,4,"multiply") //"Product of 12 and 4 is 48"
evalNumbers(28,7,"divide") //"Division of 28 and 7 is 4"
evalNumbers(22,3,"modulus") //"Modulus of 22 and 3 is 1"
evalNumbers(31,3,"square") //"square is an invalid operation"*/





let oprater = prompt("oprater select + , - :   ");
let number1 = Number(prompt("enter first number : "));
let number2 =Number(prompt("enter second number : "));
let result;


switch (oprater){
   case '+':
    result =  number1 + number2 ;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

    case '-':
        result = number1 - number2;
        consolelog(`${number1} - ${number2} = ${result}`);
        break;
    
    case '/':
        result = number1 - number2;
        console.log(`${number1} /  ${number2} = ${result}`);
        break;
    
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '%':
        result = number1 % number2;
        console.log(`${number1} % ${number2} = ${result}`);
        break;
        
        



        default:
        console.log("invalid oprater")

        document.write(oprater);
   
}






