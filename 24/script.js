"use strict";
function solution(str, ending){
  
  if ( str.slice(str.length - ending.length) == ending) {
    return true;
  }
  return false;
  
}

console.log(solution('abcde', 'abc'));





