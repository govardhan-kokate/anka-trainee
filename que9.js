let string;
let newString="";
function revString(string){
    for(let i=string.length-1 ; i>=0 ; i--){
        newString += string[i];
    }
    console.log(newString);
}
revString("JAVASCRIPT");