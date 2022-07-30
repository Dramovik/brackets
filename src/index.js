let stack = {
  arr: [],
  add: function (element){
    this.arr.push(element)
  },
  del: function () {
    return this.arr.pop();
  },
  getLast: function () {
    return this.arr[this.arr.length - 1];
  }
}

module.exports = function check(str, bracketsConfig) {
  stack.arr = [];
  let strArr = str.split('');
  let flag = true;

  strArr.forEach((itemStr, indexScobka) => {
    bracketsConfig.forEach((itemMap, indexConfig) => {

      if (itemMap.indexOf(itemStr) === 0){
        if (itemMap[0] === itemMap[1] && stack.getLast() === bracketsConfig[indexConfig][0]) {
          stack.del();
        } else {
          stack.add(itemStr);
        }
        //console.log("strArr inter.: ", indexScobka, ' add to arr', stack.arr)
      }

      if (itemMap.indexOf(itemStr) === 1){
        if (stack.getLast() === bracketsConfig[indexConfig][0]){
          stack.del();
          //console.log("strArr inter.: ", indexScobka, ' del to arr', stack.arr)
        } else {
          flag = false;
        }
      }
    })
  })
  //console.log('Length arr: ', stack.arr.length);
  if (stack.arr.length !== 0) {flag = false;}
  console.log('Flag: ', flag, ' Length arr: ', stack.arr.length, ' arr: ', stack.arr);
  if (flag === false) {
    return false;
  } else {
    return true;
  }
}
