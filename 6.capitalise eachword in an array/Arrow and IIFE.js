//Convert all the strings to title caps in a string array 


let stringList = ["gama", 'delta', 'alpha', 'beta'];
let stringListCaps = [];

let capitaliseEachWord = ((srtingList) => {
  for (var i = 0; i < stringList.length; i++) {
    let capitalised = stringList[i][0].toUpperCase() + stringList[i].substring(1);
    stringListCaps.push(capitalised);
  }
  console.log(stringList);
  console.log(stringListCaps);
})(stringList);