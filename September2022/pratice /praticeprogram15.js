/*15) Find number of days in a given month
    If month is outside the range of 1 and 12 print “Invalid month”.
    If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
    Else if month is equal to 4, 6, 9 or 11 print “30 days”.
    Else print “31 days”.
findDaysInMonth(2, 2012) //"The Month has 29 days"
findDaysInMonth(2, 2013) //"The Month has 28 days"*/

let year;
function isLeapyear(year) {
  (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
}
function findDaysInMonth(month, year) {
  if (1 < month && month > 12) {
    console.log(`is invalid ${month}`);
  } else if (month == 2) {
    console.log("it has 28 days ");
  } else {
    console.log(" it has 29 days");
  }
}
if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log("this moth has 30 days");
} else {
  console.log("this month has 31 days");
}

findDaysInMonth(2, 2013);
findDaysInMonth(2, 2014);
