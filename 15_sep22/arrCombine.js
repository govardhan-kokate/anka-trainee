let a = ["a", "b", "c"];
let b = [1, 2, 3];
let c = [];
function arrCombine() {
    let j=0;
    for (let i = 0; i < a.length; i++) {
        c.push(a[i]);
        
        if (j < b.length) {
          
            c.push(b[j]);
          j++;
        }
    }
    console.log(c);
}
arrCombine();

