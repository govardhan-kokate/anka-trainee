//separate odd and even integers in separate arrays
function splitOddEven(numbers) {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        
        even.push(numbers[i]);
      } else {
       
        odd.push(numbers[i]);
      }
    }
    const returnobject = {
        odd,
        even,
      };
    
      return returnobject;
    }
    console.log(splitOddEven([1,2,3,4,5,6,7,8,9]));
  