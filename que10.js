//let str;
let newStr="";
function revstr(str){
    for(let i=str.length-1 ; i>=0 ; i--){
        newStr += str[i];
    }
    if(str==newStr){
        console.log(str+" is palindrom")
    }else{
        console.log(str+" is not a palindrom")
    }
}
let str = prompt("enter a str: ");
revstr(str);