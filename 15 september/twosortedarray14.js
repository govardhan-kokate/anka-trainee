//. 14 Write a function that merges two sorted arrays into a new sorted array. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.le
let q = [1,4,6];
let w = [2,3,5];
let a = [];

for (let i=0 ; i<q.length; i++){
    a.push(q[i]);
}
for (let j=0 ; j<w.length; j++){
    a.push(w[j]);
}
console.log(a);

for(let i = 1 ; i < a.length; i++){
    for(let j = 0 ; j< i ; j++){
        if(a[i]<a[j]){
            let c = a[i];
            a[i] = a[j];
            a[j] = c;

        }
    }
}
console.log(a);
