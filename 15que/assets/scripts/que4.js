//4. Write a function that reverses an array, preferably in place.
let revArray = [12, 2, 22, 32, 5];
let newArray;
let length = revArray.length;
console.log(revArray + " original array");
function reversArray() {
    for(i=0; i<length; i++){
        for(j=length-(i+1);j>=i;j--){
    newArray = revArray[i];
    revArray[i] = revArray[length - (i+1)];
    revArray[length - (i+1)] = newArray;
    }
}
    console.log(revArray);
}

reversArray();

/*for(i=revArray.length-1;i>=0;i--){
    newArray.push(revArray[i]);
    }
    console.log(newArray);*/