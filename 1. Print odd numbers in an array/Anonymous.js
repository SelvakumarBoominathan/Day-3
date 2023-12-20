//using anonymous Fn:

let myArr = [1, 2, 3, 4, 5]

var printOddNumbers = function (myArr) {
  var result = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 !== 0) {
      result.push(myArr[i]);
    }
  }
  return result
}
console.log("using anonymous Fn:", printOddNumbers(myArr));