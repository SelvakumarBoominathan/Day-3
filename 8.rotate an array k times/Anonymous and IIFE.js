

let arr = [1, 2, 3, 4, 5];
let k = 2;

//Anonymous
let rotatearr = (function (arr, k) {
  let Length = arr.length

  if (k > Length) {
    k = k % Length;
  }

  // IIFE
  let result = (function (arr, k) {
    return arr.slice(Length - k).concat(arr.slice(0, Length - k));
  }(arr, k))
  return result;
})

console.log(rotatearr(arr, k));