
let arr = [3, 1, 6, 4, 9, 5];
let arrrev = new Array;
function arrReverse() {
    for (let i = arr.length - 1; i >= 0; i--) {
        arrrev.push(arr[i]);
    }
    console.log(arrrev);
}

arrReverse();

