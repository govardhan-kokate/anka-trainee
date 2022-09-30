//aramstrong program 
let x = 371;
let sum =0;
let temp = x;

while (temp > 0){
    y=temp%10
    sum+=y*y*y
    temp=parseInt(temp/10)
}
console.log(x.sum)
if(x===sum){
    console.log("this is aram strog number")
}else{
    console.log ("not strong number ")
    
}
