//using IIFE:
(function (myArr) {
  let resultArr = [];
  for (i = 0; i < myArr.length; i++) {
    if (myArr[i] == 1 || myArr[i] == 2) {
      continue;
    } else {
      let isPrime = true;
      for (var j = 2; j < myArr[i]; j++) {
        if (myArr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        resultArr.push(myArr[i]);
      }
    }
  }
  console.log("prime numbers in an array using IIFE fn is", resultArr + '.');
})([1, 2, 3, 4, 5])