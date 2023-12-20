//Sum of all numbers in an array:
//using IIFE:
let myArr = [1, 2, 3, 4, 5];

(function (myArr) {
  let sumOfNumbers = 0;
  for (var i = 0; i < myArr.length; i++) {
    sumOfNumbers += myArr[i];
  }
  console.log("Sum of numbers using IIFE function is", sumOfNumbers + '.');
})([1, 2, 3, 4, 5])