function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

console.log(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice){
  return 'this is a product!'
}
const productOutput = productDescription`This product(${prodName}) is ${prodPrice}.`;
console.log(productOutput);