//Remove duplicates from an array:
//using arrow Fn:

let isDuplicate = ((list) => {

  for (i = 0; i < list.length; i++) {
    let cleanStr1 = list[i].toString().toLowerCase();
    for (var j = i + 1; j < list.length; j++) {
      let cleanStr2 = list[j].toString().toLowerCase();
      if (cleanStr1 === cleanStr2) {
        list.splice(j, 1);
        j--;
      }
    }
  }
  console.log(list);
})(["Goat", "rain", "thunder", 3, 3, 3, "rain", 5, 6, 5]);