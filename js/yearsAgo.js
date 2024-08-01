export default function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    var yearsDifference = currentYear - year;
    return yearsDifference;
  }
  console.log(yearsAgo(1994))
  console.log(yearsAgo(2001))