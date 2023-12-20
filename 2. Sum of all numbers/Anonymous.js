//Sum of all numbers in an array:
//using anonymous Fn:
//printSumOfNumbers is a function expression.

let myArr = [1, 2, 3, 4, 5];

var printSumOfNumbers = (function (myArr) {
  let sumOfNumbers = 0;
  for (i = 0; i < myArr.length; i++) {
    sumOfNumbers += myArr[i];
  }
  return sumOfNumbers;
})(myArr)

console.log("Sum of numbers using anonymous function is", printSumOfNumbers + '.')