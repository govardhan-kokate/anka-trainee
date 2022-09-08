// 3. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0


let num1 = -5;
let num2 = -2;
let num3 = -6;
let num4 = 0;
let num5 = -1;

if(num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5){
    alert(num1,"is largest number")
}
else if(num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5){
    alert(num2,"is largest number")
}
else if(num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5){
    alert(num3,"is largest number")
}
else if(num4 >= num1 && num4 >= num3 && num4 >= num2 && num4 >= num5){
    alert(num4,"is largest number")
}
else if(num5 >= num1 && num5 >= num3 && num5 >= num2 && num5 >= num4){
    alert(num5,"is largest number")
}


