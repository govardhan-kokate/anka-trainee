//13. Write a function that combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
let a = ['a','b','c'];
let b = [1,2,3,4];
let newarr = [];

for (let i = 0; i < a.length && b.length ; i++){
    newarr.push(a[i],b[i]);

}
console.log(newarr);