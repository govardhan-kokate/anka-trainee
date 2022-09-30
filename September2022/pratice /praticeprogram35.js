let array = [1,2,30,40,4442,10000];
function largest() {
  for (i = 1; i < array.length; i++)
    for (j = 0; j < i; j++)
      if (array[i] > array[j]) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
  console.log(array[1] + "is second largest of " + array);
}
largest();
