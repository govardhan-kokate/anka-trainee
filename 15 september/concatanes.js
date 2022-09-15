//12.Write a function that concatenates two arrays. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

let a = ['a','b','c'];
let b = [1,2,3];
let newArray = [];


for(  let i = 0; i< a.length; i++){
    newArray.push(a[i])
}
for ( let j = 0; j< b.length; j++){
    newArray.push(b[j])
}

console.log(newArray);
