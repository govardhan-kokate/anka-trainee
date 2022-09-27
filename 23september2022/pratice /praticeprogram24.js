//9) Write a JavaScript function to check whether an `input` is an array or not.

function isArray(arr){

    if(!Array.isArray(arr))
    {
        return false;
       
    }
    return true;
    
}

console.log(isArray([1,2,3,4]));
console.log(isArray("BMW"));
