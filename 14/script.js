"use strict";
function scramble(str1, str2) {
  const obj = {};
  for (const symbol of str1) {
    if (!obj[symbol]) {
      obj[symbol] = 1;
    } else {
      obj[symbol]++;
    }
  }
  for (const symbol of str2) {
    if (!obj[symbol]) {
      return false;
    } else {
      obj[symbol]--;
      if(obj[symbol] < 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(scramble('jscripts', ''));







