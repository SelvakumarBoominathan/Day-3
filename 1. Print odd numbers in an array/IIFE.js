//Print odd numbers in an array:
//using IIFE:
//let myArr = [1, 2, 3, 4, 5]

(function (myArr) {
  var result = [];
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 !== 0) {
      result.push(myArr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5]);