

function strPalindrome() {
   let flag=1;
    for (i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            
            flag = 0;
            break;
        }
        
    }
    if(flag){
        console.log(str + " string is palindrome");
    }
    else{
        console.log(str + " string is not palindrome");
    }
    
}
let str = prompt("Enter a string: ");
strPalindrome();

//if it is not plindrome still printing both statements of console.