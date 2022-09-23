//fibonacci program 
let one = 0;
let two = 1;

for (let i = 1; i <= 10; i ++){
    let current = one + two;
    one = two;
    two = current;
    console.log(current);
}