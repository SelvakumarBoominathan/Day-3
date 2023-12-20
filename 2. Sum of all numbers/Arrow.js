//Sum of all numbers in an array:
//using arrow Fn:
let myArr = [1, 2, 3, 4, 5];

let arrowFnToSum = (myArr) => {
  let sumOfNumbers = 0;
  for (i = 0; i < myArr.length; i++) {
    sumOfNumbers += myArr[i];
  }
  console.log('Sum of numbers using arrow function is', sumOfNumbers + '.')
}
arrowFnToSum(myArr);