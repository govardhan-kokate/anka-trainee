
let arr = [2, 3, 6, 4, 5];
let elt = 4;
function eltOccurs() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elt) {
      console.log(elt + " is present in array");
    }
  }
}
eltOccurs();