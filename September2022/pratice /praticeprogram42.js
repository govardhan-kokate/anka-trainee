//program to find frequency of each digit in a given integer.

let n = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let rem;

while (n !== 0) {
  remider = n % 10;
  n = n/10;
  switch (rem) {
    case 1:
      ++c1;
      break;
    case 2:
      ++c2;
      break;
    case 3:
      ++c3;
      break;
    case 4:
      ++c4;
      break;
  }
}

