//Print odd numbers in an array:
//using arrow Fn:
let myArr = [1, 2, 3, 4, 5]

let arrowForPrintOddNumbers = (myArr) => {
  result = [];
  for (i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 !== 0) {
      result.push(myArr[i]);
    }
  }
  return result;
}

console.log("using arrow function:", arrowForPrintOddNumbers(myArr));