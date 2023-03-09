"use strict";
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.
function deepCount(a){
  return a.reduce((acc, val) => {
     return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, a.length);
}









