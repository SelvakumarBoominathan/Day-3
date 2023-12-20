//using IIFE Fn:

let list = ["level", 234, 353, "LoL", "apple"];
let palindromeList = [];

let reversedString = (string) => {
  var str = string.toString().toLowerCase();
  var strRev = str.split('').reverse().join('');
  return str === strRev;
}

//IIFE Fn:
(function (list) {
  for (var i = 0; i < list.length; i++) {
    if (reversedString(list[i])) {
      palindromeList.push(list[i]);
    }
  }
  console.log(palindromeList);
})(list);

