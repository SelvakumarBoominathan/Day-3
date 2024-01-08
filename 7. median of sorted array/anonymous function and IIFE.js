let arr1 = [6, 7, 5];
let arr2 = [10, 13, 56];


let result = function (A1, A2) {
  let mergedArr = arr1.concat(arr2);

  // IIFE 
  let sortedArr = (function (a) {
    return [...a].sort((x, y) => x - y);
  }(mergedArr))

  let median = function (arr) {
    let position = Math.floor((arr.length / 2));
    return ((arr[position - 1] + arr[position]) / 2)
  }(sortedArr);

  return (median);
}

console.log(result());


