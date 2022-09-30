//11) Function `findTriangleType()` finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.
//Print “Equilateral triangle.” if values for all side1, side2 and side3 are equalPrint “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3  Else “Scalene triangle.” since values of all sides are unequal.
function findTriangle(side1, side2, side3) {
  if ((side1 == side2) == side3) {
    console.log("Equilateral triangle all side are equil in this trangle");
  } else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log(
      "isosceles triangle side1 and side2 is equil in this trangle  "
    );
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    console.log("Scalene triangle in this triangle all sides are unequal");
  }
}
findTriangle(9, 7, 8);
